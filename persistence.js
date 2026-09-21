// Preferences stay in this browser; credentials are never stored here.
(() => {
  const status = document.getElementById('saveStatus');
  document.querySelectorAll('.report').forEach(report => {
    const key = `reportecmp:preferences:v1:${report.dataset.report}`;
    const controls = [...report.querySelectorAll('.mini-control')].map(block => ({
      name: block.querySelector('label').textContent.trim(),
      select: block.querySelector('select'),
      owner: block.classList.contains('responsible')
    }));
    try {
      const saved = JSON.parse(localStorage.getItem(key) || 'null');
      if (saved && typeof saved === 'object') {
        controls.forEach(({name, select, owner}) => {
          const item = saved[name];
          if (!item || typeof item.value !== 'string') return;
          if (owner && Array.isArray(item.options)) {
            item.options.filter(value => typeof value === 'string').forEach(value => {
              if (![...select.options].some(option => option.value === value)) {
                select.add(new Option(value, value));
              }
            });
          }
          if ([...select.options].some(option => option.value === item.value)) select.value = item.value;
        });
        report.dataset.area = controls.find(control => control.name === 'Área').select.value;
      }
    } catch {
      status.textContent = 'No se pudieron recuperar los cambios guardados en este navegador.';
    }
    report.addEventListener('change', event => {
      if (!event.target.matches('select')) return;
      const saved = Object.fromEntries(controls.map(({name, select, owner}) => [name, {
        value: select.value,
        ...(owner ? {options: [...select.options].map(option => option.value)} : {})
      }]));
      try {
        localStorage.setItem(key, JSON.stringify(saved));
        status.textContent = 'Cambios guardados en este navegador.';
      } catch {
        status.textContent = 'No se pudo guardar. Exporta a Excel para conservar tus cambios.';
      }
    });
  });
})();
