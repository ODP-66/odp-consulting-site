const cfg = window.ODP_CONFIG || {};
const menuBtn = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.menu');
if(menuBtn && menu){menuBtn.addEventListener('click',()=>menu.classList.toggle('open'));}
function activate(selector, value, type){document.querySelectorAll(selector).forEach(el=>{el.addEventListener('click',(e)=>{if(!value){e.preventDefault();const n=document.querySelector('#site-notice');if(n){n.textContent=type+' n’est pas encore configuré. Ajoutez la valeur dans config.js.';n.classList.add('show');}}else{if(type==='Microsoft Bookings'){el.href=value;el.target='_blank';}if(type==='E-mail'){el.href='mailto:'+value;}if(type==='Téléphone'){el.href='tel:'+value;}if(type==='WhatsApp'){el.href=value;el.target='_blank';}}}); if(value){if(type==='Microsoft Bookings'){el.href=value;el.target='_blank';}if(type==='E-mail')el.href='mailto:'+value;if(type==='Téléphone')el.href='tel:'+value;if(type==='WhatsApp'){el.href=value;el.target='_blank';}}});}
activate('[data-bookings]',cfg.bookingsUrl,'Microsoft Bookings');
activate('[data-email]',cfg.contactEmail,'E-mail');
activate('[data-phone]',cfg.phone,'Téléphone');
activate('[data-whatsapp]',cfg.whatsapp,'WhatsApp');
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('[data-content]').forEach(c=>{c.style.display=(f==='all'||c.dataset.content===f)?'grid':'none';});}));
