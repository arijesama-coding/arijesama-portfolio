import { Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';

@Injectable({ providedIn: 'root' })
export class ThreeSceneService implements OnDestroy {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private coreGroup!: THREE.Group;
  private ringMesh!: THREE.Mesh;
  private particleSystem!: THREE.Points;
  private logoMat!: THREE.MeshPhysicalMaterial;
  private logoGlowMat!: THREE.MeshBasicMaterial;
  private orbiters: THREE.Mesh[] = [];
  private clock = new THREE.Clock();
  private animId = 0;
  private heroActive = true;
  private heroMouseX = 0;
  private heroMouseY = 0;
  private heroTargetX = 0;
  private heroTargetY = 0;
  private io?: IntersectionObserver;
  private resizeHandler?: () => void;
  private mouseHandler?: (e: MouseEvent) => void;
  private prefersReducedMotion = false;
  private isMobile = false;
  private initialized = false;

  constructor(private ngZone: NgZone) {}

  init(canvas: HTMLCanvasElement): void {
    if (this.initialized || typeof THREE === 'undefined') return;
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isMobile = window.innerWidth < 900;

    let width = 0;
    let height = 0;
    const measure = () => {
      const wrap = canvas.parentElement;
      if (wrap) {
        width = wrap.clientWidth;
        height = wrap.clientHeight;
      }
    };
    measure();
    if (width === 0 || height === 0) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 7);

    try {
      this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      canvas.style.display = 'none';
      return;
    }
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.isMobile ? 1.5 : 2));

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
    dirLight.position.set(4, 5, 6);
    this.scene.add(dirLight);
    const cyanLight = new THREE.PointLight(0x55dbe5, 1.4, 12);
    cyanLight.position.set(-3, -2, 3);
    this.scene.add(cyanLight);
    const fillLight = new THREE.PointLight(0xffffff, 0.4, 10);
    fillLight.position.set(2, -3, 2);
    this.scene.add(fillLight);

    this.coreGroup = new THREE.Group();
    this.scene.add(this.coreGroup);

    const logoPolys = [
      [[9.47, 10.26], [12.93, 10.26], [16.74, 3.06], [15.11, 0], [9.47, 10.26]],
      [[13.39, 2.92], [18.76, 13.93], [21, 10.26], [15.22, 0], [13.39, 2.92]],
      [[1.72, 12.12], [14.63, 12.12], [20.89, 23.26], [24.08, 23.26], [20, 15.99], [24.08, 8.31], [27.95, 8.31], [23.74, 15.79], [29.65, 26.73], [18.85, 26.73], [12.46, 15.34], [3.96, 15.34], [1.72, 12.12]],
      [[5.37, 17.25], [9.11, 17.25], [5.84, 23.11], [9.11, 23.11], [12.17, 18.15], [14.09, 21.82], [11.42, 26.45], [0, 26.45], [5.37, 17.25]]
    ];
    const LOGO_VB_W = 29.65;
    const LOGO_VB_H = 26.73;
    const LOGO_SCALE = 0.11;

    this.logoMat = new THREE.MeshPhysicalMaterial({
      color: 0x050607,
      metalness: 0.85,
      roughness: 0.22,
      clearcoat: 0.5,
      clearcoatRoughness: 0.3,
      emissive: 0x55dbe5,
      emissiveIntensity: 0.22
    });
    const logoEdgeMat = new THREE.LineBasicMaterial({ color: 0x55dbe5, transparent: true, opacity: 0.9 });
    this.logoGlowMat = new THREE.MeshBasicMaterial({
      color: 0x55dbe5,
      transparent: true,
      opacity: 0.06,
      side: THREE.BackSide
    });

    const logoExtrude = {
      depth: 2.4,
      bevelEnabled: true,
      bevelThickness: 0.18,
      bevelSize: 0.14,
      bevelSegments: 3,
      curveSegments: 6
    };
    const logoGroup = new THREE.Group();

    logoPolys.forEach((pts) => {
      const shape = new THREE.Shape();
      pts.forEach((p, i) => {
        const x = p[0] - LOGO_VB_W / 2;
        const y = -(p[1] - LOGO_VB_H / 2);
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      });
      const geo = new THREE.ExtrudeGeometry(shape, logoExtrude);
      geo.translate(0, 0, -logoExtrude.depth / 2);
      geo.scale(LOGO_SCALE, LOGO_SCALE, LOGO_SCALE);

      logoGroup.add(new THREE.Mesh(geo, this.logoMat));
      logoGroup.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 20), logoEdgeMat));

      const glowGeo = geo.clone();
      glowGeo.scale(1.09, 1.09, 1.6);
      logoGroup.add(new THREE.Mesh(glowGeo, this.logoGlowMat));
    });

    this.coreGroup.add(logoGroup);

    const logoRim = new THREE.PointLight(0x55dbe5, 2.2, 12);
    logoRim.position.set(1.2, 0.6, 2.2);
    this.coreGroup.add(logoRim);
    const logoBack = new THREE.PointLight(0x55dbe5, 1.4, 10);
    logoBack.position.set(-1, -0.8, -2);
    this.coreGroup.add(logoBack);

    const ringGeo = new THREE.TorusGeometry(1.85, 0.018, 16, 120);
    const ringMat = new THREE.MeshPhysicalMaterial({
      color: 0xc5cbd0,
      metalness: 1,
      roughness: 0.2,
      transparent: true,
      opacity: 0.55
    });
    this.ringMesh = new THREE.Mesh(ringGeo, ringMat);
    this.ringMesh.rotation.x = Math.PI / 2.4;
    this.coreGroup.add(this.ringMesh);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.008, 12, 120),
      new THREE.MeshBasicMaterial({ color: 0x55dbe5, transparent: true, opacity: 0.3 })
    );
    ring2.rotation.x = Math.PI / 1.7;
    ring2.rotation.y = 0.4;
    this.coreGroup.add(ring2);

    const smallGeo = new THREE.OctahedronGeometry(0.09, 0);
    const smallMat = new THREE.MeshPhysicalMaterial({ color: 0x8f969c, metalness: 0.8, roughness: 0.3 });
    const orbitCount = this.isMobile ? 4 : 7;
    for (let i = 0; i < orbitCount; i++) {
      const m = new THREE.Mesh(smallGeo, smallMat);
      const angle = (i / orbitCount) * Math.PI * 2;
      const radius = 2.0 + Math.random() * 0.3;
      (m as any).userData = {
        angle,
        radius,
        speed: 0.15 + Math.random() * 0.15,
        yOff: Math.random() * Math.PI * 2
      };
      this.coreGroup.add(m);
      this.orbiters.push(m);
    }

    const particleCount = this.isMobile ? 150 : 450;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x55dbe5,
      size: 0.02,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true
    });
    this.particleSystem = new THREE.Points(particleGeo, particleMat);
    this.scene.add(this.particleSystem);

    this.coreGroup.scale.set(0.001, 0.001, 0.001);

    this.resizeHandler = () => {
      measure();
      if (width === 0 || height === 0) return;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    };
    window.addEventListener('resize', this.resizeHandler);

    this.io = new IntersectionObserver(
      (entries) => {
        this.heroActive = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );
    const heroEl = document.getElementById('hero');
    if (heroEl) this.io.observe(heroEl);

    if (!('ontouchstart' in window)) {
      this.mouseHandler = (e: MouseEvent) => {
        this.heroMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        this.heroMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', this.mouseHandler);
    }

    this.initialized = true;
    this.ngZone.runOutsideAngular(() => this.animate());
  }

  private animate = (): void => {
    if (!this.initialized) return;
    this.animId = requestAnimationFrame(this.animate);
    if (!this.heroActive) return;

    const t = this.clock.getElapsedTime();

    if (!this.prefersReducedMotion) {
      this.coreGroup.rotation.y = t * 0.12;
      this.ringMesh.rotation.z = t * 0.08;
      this.orbiters.forEach((o) => {
        const ud = (o as any).userData;
        ud.angle += ud.speed * 0.01;
        o.position.x = Math.cos(ud.angle) * ud.radius;
        o.position.z = Math.sin(ud.angle) * ud.radius;
        o.position.y = Math.sin(t * 0.6 + ud.yOff) * 0.3;
        o.rotation.x += 0.01;
        o.rotation.y += 0.01;
      });
      this.particleSystem.rotation.y = t * 0.015;
      this.logoMat.emissiveIntensity = 0.22 + Math.sin(t * 1.6) * 0.1;
      this.logoGlowMat.opacity = 0.05 + (Math.sin(t * 1.6) * 0.5 + 0.5) * 0.05;

      this.heroTargetX += (this.heroMouseX - this.heroTargetX) * 0.05;
      this.heroTargetY += (this.heroMouseY - this.heroTargetY) * 0.05;
      this.coreGroup.rotation.x = this.heroTargetY * 0.3;
      this.coreGroup.rotation.y += this.heroTargetX * 0.15 * 0.01;
    }

    this.renderer.render(this.scene, this.camera);
  };

  getCoreGroup(): THREE.Group | null {
    return this.coreGroup || null;
  }

  getParticleSystem(): THREE.Points | null {
    return this.particleSystem || null;
  }

  onHeroScroll(progress: number): void {
    if (!this.camera || !this.coreGroup) return;
    this.camera.position.z = 7 + progress * 2.4;
    this.coreGroup.position.y = -progress * 0.6;
    this.coreGroup.scale.setScalar(1 + progress * 0.15);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animId);
    if (this.resizeHandler) window.removeEventListener('resize', this.resizeHandler);
    if (this.mouseHandler) window.removeEventListener('mousemove', this.mouseHandler);
    this.io?.disconnect();
    if (this.renderer) this.renderer.dispose();
    this.scene?.traverse((obj) => {
      if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
      if ((obj as THREE.Mesh).material) {
        const mat = (obj as THREE.Mesh).material;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else (mat as THREE.Material).dispose();
      }
    });
    this.initialized = false;
  }
}
