// objetos.js — Geometrías Three.js personalizadas para contenido aumentado

/**
 * Componente: capa-gases
 * Página 1 — Anillo toroidal semitransparente que simula la capa de gases
 * de efecto invernadero alrededor de la Tierra
 */
AFRAME.registerComponent('capa-gases', {
    init: function () {
        var THREE = AFRAME.THREE;

        // Anillo de gases de efecto invernadero
        var geometry = new THREE.TorusGeometry(1.3, 0.15, 8, 48);
        var material = new THREE.MeshStandardMaterial({
            color: 0xff6b35,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide
        });
        var torus = new THREE.Mesh(geometry, material);
        torus.rotation.x = Math.PI / 3;
        this.el.object3D.add(torus);
        this.torus = torus;

        // Segundo anillo (CO2)
        var geometry2 = new THREE.TorusGeometry(1.5, 0.1, 8, 48);
        var material2 = new THREE.MeshStandardMaterial({
            color: 0xffaa00,
            transparent: true,
            opacity: 0.25,
            side: THREE.DoubleSide
        });
        var torus2 = new THREE.Mesh(geometry2, material2);
        torus2.rotation.x = -Math.PI / 4;
        this.el.object3D.add(torus2);
        this.torus2 = torus2;
    },
    tick: function (time) {
        if (this.torus) {
            this.torus.rotation.z = time * 0.0005;
        }
        if (this.torus2) {
            this.torus2.rotation.z = -time * 0.0003;
        }
    }
});

/**
 * Componente: particulas-humo
 * Página 2 — Sistema de partículas que simula emisiones industriales
 */
AFRAME.registerComponent('particulas-humo', {
    init: function () {
        var THREE = AFRAME.THREE;
        var count = 60;
        var positions = new Float32Array(count * 3);
        var velocities = new Float32Array(count);

        for (var i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 0.5;
            positions[i * 3 + 1] = Math.random() * 2;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
            velocities[i] = 0.002 + Math.random() * 0.004;
        }

        var geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        var material = new THREE.PointsMaterial({
            color: 0x888888,
            size: 0.08,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true
        });

        var points = new THREE.Points(geometry, material);
        this.el.object3D.add(points);
        this.points = points;
        this.positions = positions;
        this.velocities = velocities;
        this.count = count;
    },
    tick: function () {
        if (!this.positions) return;

        for (var i = 0; i < this.count; i++) {
            // Mover partícula hacia arriba
            this.positions[i * 3 + 1] += this.velocities[i];

            // Dispersión lateral
            this.positions[i * 3] += (Math.random() - 0.5) * 0.002;
            this.positions[i * 3 + 2] += (Math.random() - 0.5) * 0.002;

            // Reiniciar partícula cuando sale del rango
            if (this.positions[i * 3 + 1] > 2) {
                this.positions[i * 3] = (Math.random() - 0.5) * 0.3;
                this.positions[i * 3 + 1] = 0;
                this.positions[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
            }
        }

        this.points.geometry.attributes.position.needsUpdate = true;
    }
});

/**
 * Componente: turbina-eolica
 * Página 5 — Turbina eólica con aspas giratorias (energía renovable)
 */
AFRAME.registerComponent('turbina-eolica', {
    init: function () {
        var THREE = AFRAME.THREE;

        // Poste de la turbina
        var posteGeo = new THREE.CylinderGeometry(0.05, 0.08, 1.5, 8);
        var posteMat = new THREE.MeshStandardMaterial({ color: 0xcccccc });
        var poste = new THREE.Mesh(posteGeo, posteMat);
        poste.position.y = 0.75;
        this.el.object3D.add(poste);

        // Nacelle (carcasa superior)
        var nacelleGeo = new THREE.BoxGeometry(0.15, 0.1, 0.1);
        var nacelleMat = new THREE.MeshStandardMaterial({ color: 0xdddddd });
        var nacelle = new THREE.Mesh(nacelleGeo, nacelleMat);
        nacelle.position.y = 1.55;
        this.el.object3D.add(nacelle);

        // Grupo de aspas
        var aspaGroup = new THREE.Group();
        aspaGroup.position.y = 1.55;
        aspaGroup.position.x = 0.08;

        for (var i = 0; i < 3; i++) {
            var aspaGeo = new THREE.BoxGeometry(0.05, 0.6, 0.015);
            var aspaMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
            var aspa = new THREE.Mesh(aspaGeo, aspaMat);
            aspa.position.y = 0.3;

            var pivot = new THREE.Group();
            pivot.add(aspa);
            pivot.rotation.z = (Math.PI * 2 / 3) * i;
            aspaGroup.add(pivot);
        }

        // Hub central
        var hubGeo = new THREE.SphereGeometry(0.04, 8, 8);
        var hubMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
        var hub = new THREE.Mesh(hubGeo, hubMat);
        aspaGroup.add(hub);

        this.el.object3D.add(aspaGroup);
        this.aspas = aspaGroup;
    },
    tick: function (time) {
        if (this.aspas) {
            this.aspas.rotation.z = time * 0.002;
        }
    }
});

/**
 * Componente: gotas-agua
 * Página 3 — Gotas que simulan el deshielo del iceberg
 */
AFRAME.registerComponent('gotas-agua', {
    init: function () {
        var THREE = AFRAME.THREE;
        var count = 20;
        var positions = new Float32Array(count * 3);

        for (var i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 0.8;
            positions[i * 3 + 1] = Math.random() * 0.5;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
        }

        var geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        var material = new THREE.PointsMaterial({
            color: 0x85c1e9,
            size: 0.04,
            transparent: true,
            opacity: 0.7
        });

        var points = new THREE.Points(geometry, material);
        this.el.object3D.add(points);
        this.points = points;
        this.positions = positions;
        this.count = count;
    },
    tick: function () {
        if (!this.positions) return;

        for (var i = 0; i < this.count; i++) {
            this.positions[i * 3 + 1] -= 0.003;
            if (this.positions[i * 3 + 1] < -0.3) {
                this.positions[i * 3] = (Math.random() - 0.5) * 0.6;
                this.positions[i * 3 + 1] = 0.4;
                this.positions[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
            }
        }

        this.points.geometry.attributes.position.needsUpdate = true;
    }
});
