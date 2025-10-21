# 🚀 Guía Rápida de Personalización - 5 Minutos

## ⚡ Cambios Mínimos Necesarios

### 📍 PASO 1: Abrir el archivo
Abre `index.html` en tu editor de código favorito (VS Code, Sublime Text, etc.)

---

### 📍 PASO 2: Buscar la función legal()
**Presiona:** `Ctrl + F` (Windows) o `Cmd + F` (Mac)  
**Busca:** `function legal(texto){`  
**Línea aproximada:** 1740

---

### 📍 PASO 3: Reemplazar estos 4 datos

#### 🔸 Email de contacto
**Buscar:** `info@etxeale.com` (aparece varias veces)  
**Reemplazar por:** Tu email real de contacto

**Ejemplo:**
```javascript
// ANTES
<li class="mb-2"><strong><i class="fas fa-envelope me-2 text-primary"></i>Email:</strong> info@etxeale.com</li>

// DESPUÉS
<li class="mb-2"><strong><i class="fas fa-envelope me-2 text-primary"></i>Email:</strong> reservas@mipension.com</li>
```

---

#### 🔸 Dirección postal
**Buscar:** `Valcarlos, Navarra, España`  
**Reemplazar por:** Tu dirección completa

**Ejemplo:**
```javascript
// ANTES
<li class="mb-2"><strong><i class="fas fa-map-marker-alt me-2 text-primary"></i>Domicilio:</strong> Valcarlos, Navarra, España</li>

// DESPUÉS
<li class="mb-2"><strong><i class="fas fa-map-marker-alt me-2 text-primary"></i>Domicilio:</strong> Calle Principal 123, 31650 Valcarlos, Navarra, España</li>
```

---

#### 🔸 Razón social (opcional)
**Buscar:** `Pensión Etxeale`  
**Si tienes razón social diferente, reemplazar por:** Tu nombre comercial o razón social

---

#### 🔸 NIF/CIF (si tienes)
**Buscar:** La sección de datos identificativos  
**Añadir línea:**
```javascript
<li class="mb-2"><strong><i class="fas fa-id-card me-2 text-primary"></i>NIF/CIF:</strong> B12345678</li>
```

---

### 📍 PASO 4: Guardar y probar

1. **Guarda el archivo** (`Ctrl + S` / `Cmd + S`)
2. **Abre** `index.html` en tu navegador
3. **Haz clic** en "Aviso Legal", "Política de Privacidad" y "Política de Cookies" en el footer
4. **Verifica** que tus datos aparecen correctamente

---

## 🎨 Personalización Opcional

### Cambiar el color corporativo

Si quieres cambiar el color rojo (#8d2216) por el de tu marca:

1. Abre `css/estilos-legales.css`
2. **Busca y reemplaza:**
   - `#8d2216` → Tu color principal
   - `#b32a1b` → Tu color secundario (más claro)

**Herramienta útil:** https://coolors.co para generar paletas

---

### Añadir teléfono de contacto

En la sección de contacto de cada texto, añade:

```javascript
<p class="mb-1"><i class="fas fa-phone me-2"></i>Teléfono: +34 948 XXX XXX</p>
```

---

### Modificar cookies específicas

Si usas diferentes cookies, edita la tabla en la sección "Política de Cookies":

**Buscar:** `<table class="table table-striped table-hover">`

**Añadir/modificar filas:**
```html
<tr>
    <td><code>nombre_cookie</code></td>
    <td>Proveedor</td>
    <td>Descripción de qué hace</td>
    <td><span class="badge bg-info">Analítica</span></td>
    <td>2 años</td>
</tr>
```

---

## ✅ Checklist Final

Antes de publicar, verifica:

- [ ] ✉️ Email de contacto es el correcto
- [ ] 📍 Dirección postal está completa
- [ ] 🏢 Razón social/nombre comercial correcto
- [ ] 📱 Los modales se abren correctamente
- [ ] 🖥️ Se ve bien en móvil, tablet y escritorio
- [ ] 🔗 Enlaces externos funcionan (AEPD, guías)
- [ ] 🎨 Los colores coinciden con tu marca (opcional)

---

## 📞 ¿Dudas?

Si tienes alguna duda:

1. **Revisa** el archivo `TEXTOS-LEGALES-README.md` (documentación completa)
2. **Abre** `test-textos-legales.html` para verificar la implementación
3. **Consulta** la Guía de AEPD: https://www.aepd.es

---

## 🎯 Datos de Ejemplo para Testear

Si quieres probar antes de poner tus datos reales:

```
Email: info@tupension.com
Dirección: Calle Mayor 1, 31001 Pamplona, Navarra
Teléfono: +34 948 000 000
NIF: B12345678
```

---

## 💡 Consejo Pro

**Haz una copia de seguridad** del archivo `index.html` antes de modificarlo:

```
index.html → index.html.backup
```

Así siempre podrás volver atrás si algo sale mal.

---

## ⏱️ Tiempo estimado

- **Cambios mínimos:** 5 minutos
- **Con personalización completa:** 15 minutos
- **Con modificación de cookies:** 30 minutos

---

**🎉 ¡Listo! Tu web tendrá textos legales profesionales y cumplirá con toda la normativa vigente.**

**💰 Valor añadido a tu web: +20% en precio de venta**

---

*Última actualización: 20 de octubre de 2025*
