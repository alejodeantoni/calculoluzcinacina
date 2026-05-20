# ⚡ Luz Barrio — Calculadora de Factura Eléctrica

**Barrio La Cinacina · La Plata**  
Creada por **Alejo De Antoni** · v2.0.0

---

## ¿Qué hace?

Calcula cuánto paga cada casa del barrio en base a la factura de EDELAP, dividiendo:
- Cargo fijo (impuestos ÷ 6 casas)
- Cargo variable (proporcional al consumo de cada medidor)
- Tasa de alumbrado público (÷ 6)
- Consumo de reflectores y portón (diferencia entre kWh facturados y suma de medidores)

## Funcionalidades

- 📊 Cálculo automático al ingresar datos
- 🔄 Nuevo período: pasa lecturas actuales a anteriores con un clic
- 💾 Guardado automático (localStorage + JSONBin opcional)
- ☁️ Sincronización en la nube vía [JSONBin.io](https://jsonbin.io)
- 📋 Historial completo con contraseña para borrar
- 🌙 Tema oscuro / ☀️ tema claro
- 📲 **Instalable en el celular (PWA)**

## Instalación en GitHub Pages

1. Subí todos los archivos a un repositorio de GitHub
2. Activá **GitHub Pages** en Settings → Pages → Source: `main` branch, carpeta `/` (root)
3. La app queda disponible en `https://TU_USUARIO.github.io/NOMBRE_REPO/`
4. Desde el celular, abrí esa URL en Chrome/Safari y aparece el banner para instalar

## Configurar JSONBin (opcional pero recomendado)

1. Crear cuenta gratis en [jsonbin.io](https://jsonbin.io)
2. Ir a **API Keys** y crear un Master Key
3. En la app, ir a **Configuración → JSONBin**
4. Pegar el API Key y hacer clic en "Probar conexión"
5. El Bin ID se completa automáticamente
6. Guardar configuración

Con JSONBin configurado, el historial se sincroniza en todos los dispositivos.

## Estructura de archivos

```
luz-barrio/
├── index.html       ← App completa
├── sw.js            ← Service Worker (offline)
├── manifest.json    ← Configuración PWA
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## Contraseña por defecto

La contraseña para borrar el historial es `barrio123`.  
Cambiala desde **Historial → 🔑 Contraseña**.

---

*Versión v2.0.0 · 2025*
