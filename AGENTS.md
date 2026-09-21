# Trabajo en ReporteCMP

- El catálogo principal está en `index.html`; `reportes.html` redirige a él.
- Al comenzar cada sesión de trabajo, revisar el estado local y ejecutar `git fetch origin`. Incorporar cambios remotos mediante fast-forward cuando sea seguro; conservar siempre cambios locales del usuario. No forzar pushes ni descartar trabajo.
- Al terminar modificaciones solicitadas, verificar lo necesario, crear un commit de los archivos de la tarea y subirlo a `origin/main`. El usuario ha pedido mantener GitHub actualizado; no hace falta repetir la confirmación para estos cambios. Informar si falla la subida.
- Conservar las funciones del catálogo, los tres responsables predefinidos y el guardado automático de controles.
- Las preferencias se guardan en localStorage por navegador, no en GitHub ni entre dispositivos. No afirmar sincronización remota de estos datos.
- El login es una demostración visual; no ofrece autorización real. Nunca afirmar que protege los archivos públicos.
- No publicar `.local-backup/` ni credenciales adicionales.
