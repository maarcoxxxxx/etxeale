# Pensión Etxeale - Sitio Web

## 📁 Estructura del Proyecto

El proyecto ha sido reorganizado con una estructura profesional y nombres descriptivos:

```
saveweb2zip-com-www-etxeale-com/
│
├── index.html                 # Página principal (antes en www.etxeale.com/)
│
├── css/                       # Estilos del sitio
│   ├── estilos_163589120.css
│   ├── estilos6_1437529441.css
│   └── fontawesome5/
│       ├── css/
│       │   └── fontawesome-all.min.css
│       └── webfonts/
│           └── (archivos de fuentes)
│
├── images/                    # Imágenes del sitio principal
│   └── 6/
│       └── (iconos y texturas)
│
├── api-resources/             # Recursos de API y caché (antes: iAJ5Q4Kb8vqU.com)
│   ├── api/
│   │   ├── Jr1ChskODTQg.js
│   │   └── reservas/
│   ├── cache/
│   │   └── alojamientos/
│   │       └── etxeale/
│   │           └── (imágenes en caché)
│   ├── include/
│   │   └── 35voATKiMO5y.1/
│   │       ├── css/
│   │       └── js/
│   ├── js/
│   │   ├── W8Bp8koXOZ8u.js
│   │   ├── WBWtlyVMvMhX.js
│   │   ├── photoswipe/
│   │   └── swiper/
│   └── multimedia/
│       └── alojamientos/
│           └── etxeale/
│
└── external-media/            # Multimedia externa (antes: jlnDPwRNNRWv.eu)
    └── multimedia/
        └── web/
            └── ruralesdata/
                └── icon/

```

## 🔄 Cambios Realizados

### 1. **Reorganización de Archivos**
- ✅ `index.html` movido a la raíz del proyecto
- ✅ Carpetas `css/` e `images/` movidas a la raíz
- ✅ Eliminada la carpeta `www.etxeale.com/`

### 2. **Renombrado de Carpetas**
- `iAJ5Q4Kb8vqU.com/` → `api-resources/`
  - Contiene recursos de API, caché, JavaScript y multimedia de alojamientos
  
- `jlnDPwRNNRWv.eu/` → `external-media/`
  - Contiene multimedia externa y recursos compartidos

### 3. **Actualización de Rutas**
Todas las referencias en `index.html` han sido actualizadas:
- `../iAJ5Q4Kb8vqU.com/` → `api-resources/`
- `../jlnDPwRNNRWv.eu/` → `external-media/`
- Rutas locales mantenidas: `css/`, `images/`

## 🚀 Cómo Usar

### Visualizar el Sitio
Simplemente abre `index.html` en tu navegador. Todas las rutas han sido actualizadas correctamente.

### Desarrollo Local
Si utilizas un servidor local, apunta al directorio raíz:
```bash
# Ejemplo con Python
python -m http.server 8000

# Ejemplo con Node.js (http-server)
npx http-server
```

## 📝 Notas Importantes

- **Rutas Relativas**: Todas las rutas en `index.html` son ahora relativas al directorio raíz
- **Compatibilidad**: Los scripts y estilos externos se cargan desde `api-resources/`
- **Iconos y Favicon**: Ahora se cargan desde `external-media/multimedia/web/ruralesdata/icon/`
- **Imágenes del Alojamiento**: Se encuentran en `api-resources/cache/alojamientos/etxeale/` y `api-resources/multimedia/alojamientos/etxeale/`

## 🛠️ Mantenimiento

### Para agregar nuevas imágenes:
- Imágenes del sitio principal → `images/`
- Fotos del alojamiento → `api-resources/multimedia/alojamientos/etxeale/`
- Imágenes en caché → `api-resources/cache/alojamientos/etxeale/`

### Para modificar estilos:
- Estilos principales → `css/estilos_163589120.css` y `css/estilos6_1437529441.css`
- FontAwesome → `css/fontawesome5/css/fontawesome-all.min.css`

## 📧 Información de Contacto

**Pensión Etxeale**
- Teléfono: 690 842 264
- Email: delgadomaraver@gmail.com
- Registro: UPE00985
- Ubicación: C/Elizaldea 8, 31660 Valcarlos, Navarra

---

*Estructura reorganizada el 16 de octubre de 2025*
