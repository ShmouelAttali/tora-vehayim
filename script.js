
// Form handling
const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbxo_N9v93mGVR1mKq64DGPQdL-vBfD_yZgD8Cm_NHR0xTQHoJR_miG1_KFViw_pQvaqRw/exec';
const form   = document.getElementById('bm-form');
const btn    = document.getElementById('submit-btn');
const okMsg  = document.getElementById('ok');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const orig = btn.textContent;
  btn.textContent = 'שולח...';
  btn.disabled = true;

  try {
    const fd = new FormData(form);
    await fetch(WEBAPP_URL, { method: 'POST', mode: 'no-cors', body: fd });
    form.reset();
    okMsg.style.display = 'block';
    okMsg.scrollIntoView({behavior:'smooth', block:'center'});
  } catch (err) {
    alert('אירעה שגיאה בשליחה. נסה שוב.');
  } finally {
    btn.textContent = orig;
    btn.disabled = false;
  }
});
