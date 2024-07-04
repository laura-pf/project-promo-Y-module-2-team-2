const o=document.querySelector(".js-profile-name"),r=document.querySelector(".js-profile-job"),u=document.querySelector(".js-link-linkedin"),m=document.querySelector(".js-link-github"),g=document.querySelector(".js-link-phone"),f=document.querySelector(".js-link-email"),v=document.querySelector(".js-form-fillR");v.addEventListener("input",e=>{e.preventDefault(),e.target.id==="name"?e.target.value?o.innerHTML=e.target.value:o.innerHTML="Ralph Wiggum":e.target.id==="work"?e.target.value?r.innerHTML=e.target.value:r.innerHTML="Estudiante de mi cole":e.target.id==="linkedin"?u.href=e.target.value:e.target.id==="github"?m.href="https://github.com/"+e.target.value:e.target.id==="telefono"?g.href="tel:"+e.target.value:e.target.id==="email"&&(f.href="mailto:"+e.target.value)});const i=document.querySelector(".js-form-fillR"),h=document.querySelector(".js-tittleArrowR"),s=document.querySelector(".js-form-fillD"),j=document.querySelector(".js-tittleArrowD"),b=document.querySelector(".js-tittleArrowC"),a=document.querySelector(".js-buttonComparte"),n=document.querySelector(".js-arrowD"),c=document.querySelector(".js-arrowR"),d=document.querySelector(".js-arrowC"),y=e=>{e.preventDefault(),i.classList.toggle("collapsed"),s.classList.remove("collapsed"),a.classList.remove("collapsed"),c.classList.toggle("rotation"),d.classList.remove("rotation"),n.classList.remove("rotation")};h.addEventListener("click",y);const q=e=>{e.preventDefault(),s.classList.toggle("collapsed"),i.classList.remove("collapsed"),a.classList.remove("collapsed"),n.classList.toggle("rotation"),c.classList.remove("rotation"),d.classList.remove("rotation")};j.addEventListener("click",q);const S=e=>{e.preventDefault(),a.classList.toggle("collapsedButton"),i.classList.remove("collapsed"),s.classList.remove("collapsed"),d.classList.toggle("rotation"),n.classList.remove("rotation"),c.classList.remove("rotation")};b.addEventListener("click",S);const l=new FileReader,w=document.querySelector(".js__profile-upload-btn"),p=document.querySelector(".js__profile-image"),L=document.querySelector(".js__profile-preview");function _(e){const k=e.currentTarget.files[0];l.addEventListener("load",R),l.readAsDataURL(k)}function R(){p.src=l.result,L.style.backgroundImage=`url(${l.result})`}w.addEventListener("change",_);const C=document.querySelector(".js-buttonReset"),D=document.querySelector(".js-form"),t={name:"Ralph Wiggum",job:"Estudiante de mi cole",email:` 
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
        </a>`,image:"/images/ralph.jpg"},T=e=>{D.reset(),o.innerHTML=t.name,r.innerHTML=t.job,f.innerHTML=t.email,g.innerHTML=t.phone,u.innerHTML=t.linkedin,m.innerHTML=t.github,p.src=t.image,L.style.backgroundImage=""};C.addEventListener("click",T);
//# sourceMappingURL=main.js.map
