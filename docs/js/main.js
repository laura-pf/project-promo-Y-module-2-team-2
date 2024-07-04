const n=document.querySelector(".js-profile-name"),i=document.querySelector(".js-profile-job"),l=document.querySelector(".js-link-linkedin"),o=document.querySelector(".js-link-github"),a=document.querySelector(".js-link-phone"),s=document.querySelector(".js-link-email"),m=document.querySelector(".js-form-fillR");m.addEventListener("input",e=>{e.preventDefault(),e.target.id==="name"?e.target.value?n.innerHTML=e.target.value:n.innerHTML="Ralph Wiggum":e.target.id==="work"?e.target.value?i.innerHTML=e.target.value:i.innerHTML="Estudiante de mi cole":e.target.id==="linkedin"?l.href=e.target.value:e.target.id==="github"?o.href="https://github.com/"+e.target.value:e.target.id==="telefono"?a.href="tel:"+e.target.value:e.target.id==="email"&&(s.href="mailto:"+e.target.value)});const g=document.querySelector(".js-form-fillR"),f=document.querySelector(".js-tittleArrowR"),k=document.querySelector(".js-form-fillD"),p=document.querySelector(".js-tittleArrowD"),h=document.querySelector(".js-tittleArrowC"),j=document.querySelector(".js-buttonComparte"),L=document.querySelector(".js-arrowD"),b=document.querySelector(".js-arrowR"),y=document.querySelector(".js-arrowC"),q=e=>{e.preventDefault(),g.classList.toggle("collapsed"),b.classList.toggle("rotation")};f.addEventListener("click",q);const S=e=>{e.preventDefault(),k.classList.toggle("collapsed"),L.classList.toggle("rotation")};p.addEventListener("click",S);const v=e=>{e.preventDefault(),j.classList.toggle("collapsedButton"),y.classList.toggle("rotation")};h.addEventListener("click",v);const r=new FileReader,w=document.querySelector(".js__profile-upload-btn"),c=document.querySelector(".js__profile-image"),u=document.querySelector(".js__profile-preview");function _(e){const d=e.currentTarget.files[0];r.addEventListener("load",R),r.readAsDataURL(d)}function R(){c.src=r.result,u.style.backgroundImage=`url(${r.result})`}w.addEventListener("change",_);const C=document.querySelector(".js-buttonReset"),D=document.querySelector(".js-form"),t={name:"Ralph Wiggum",job:"Estudiante de mi cole",email:` 
    <a href="mailto:" class="js-link-email">
          <div class="card__icon">
            <i class="fa-regular fa-envelope"></i>
          </div>
        </a>`,phone:`
        <a href="tel:" class="js-link-phone">
          <div class="card__icon">
            <i class="fa-solid fa-mobile-screen-button"></i>
          </div>
        </a>`,linkedin:`
    <a href="" target="_blank" class="js-link-linkedin">
          <div class="card__icon">
            <i class="fa-brands fa-linkedin-in js-icon-linkedin"></i>
          </div>
        </a>`,github:`
    <a href="" target="_blank" class="js-link-github">
          <div class="card__icon">
            <i class="fa-brands fa-github-alt"></i>
          </div>
        </a>`,image:"/images/ralph.jpg"},T=e=>{D.reset(),n.innerHTML=t.name,i.innerHTML=t.job,s.innerHTML=t.email,a.innerHTML=t.phone,l.innerHTML=t.linkedin,o.innerHTML=t.github,c.src=t.image,u.style.backgroundImage=""};C.addEventListener("click",T);
//# sourceMappingURL=main.js.map
