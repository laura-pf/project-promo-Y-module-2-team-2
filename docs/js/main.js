const i=document.querySelector(".js-form-fillR"),S=document.querySelector(".js-tittleArrowR"),n=document.querySelector(".js-form-fillD"),q=document.querySelector(".js-tittleArrowD"),C=document.querySelector(".js-tittleArrowC"),d=document.querySelector(".js-buttonComparte"),u=document.querySelector(".js-arrowD"),m=document.querySelector(".js-arrowR"),g=document.querySelector(".js-arrowC"),A=e=>{e.preventDefault(),n.classList.toggle("collapsed"),i.classList.remove("collapsed"),d.classList.remove("collapsedButton"),u.classList.toggle("rotation"),m.classList.remove("rotation"),g.classList.remove("rotation")};q.addEventListener("click",A);const _=e=>{e.preventDefault(),i.classList.toggle("collapsed"),n.classList.remove("collapsed"),d.classList.remove("collapsedButton"),m.classList.toggle("rotation"),u.classList.remove("rotation"),g.classList.remove("rotation")};S.addEventListener("click",_);const w=e=>{e.preventDefault(),d.classList.toggle("collapsedButton"),n.classList.remove("collapsed"),i.classList.remove("collapsed"),g.classList.toggle("rotation"),u.classList.remove("rotation"),m.classList.remove("rotation")};C.addEventListener("click",w);const R=document.querySelector(".js-color-marge"),E=document.querySelector(".js-color-krusty"),K=document.querySelector(".js-color-apu"),s=document.querySelector(".js-borderCard"),L=document.querySelectorAll(".js-iconCard"),p=document.querySelectorAll(".js-containerIcon"),o=document.querySelector(".js-profile-name"),a=document.querySelector(".js-profile-job"),f=document.querySelector(".js-link-linkedin"),v=document.querySelector(".js-link-github"),y=document.querySelector(".js-link-phone"),h=document.querySelector(".js-link-email"),M=document.querySelector(".js-form-fillR"),r={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},k=e=>{o.classList.add("colortittleMarge"),o.classList.remove("colortittleKrusty"),o.classList.remove("colortittleApu"),s.classList.add("card__profile-title"),s.classList.remove("colorBorderCardKrusty"),s.classList.remove("colorBorderCardApu");for(const t of L)t.classList.add("colortittleMarge"),t.classList.remove("colortittleKrusty"),t.classList.remove("colortittleApu");for(const t of p)t.classList.add("card__icon"),t.classList.remove("borderKrusty"),t.classList.remove("borderApu");r.palette=parseInt(e.target.value)};R.addEventListener("click",k);const D=e=>{o.classList.add("colortittleKrusty"),o.classList.remove("colortittleMarge"),o.classList.remove("colortittleApu"),s.classList.add("colorBorderCardKrusty"),s.classList.remove("card__profile-title"),s.classList.remove("colorBorderCardApu");for(const t of L)t.classList.add("colortittleKrusty"),t.classList.remove("colortittleMarge"),t.classList.remove("colortittleApu");for(const t of p)t.classList.add("borderKrusty"),t.classList.remove("card__icon"),t.classList.remove("borderApu");r.palette=parseInt(e.target.value)};E.addEventListener("click",D);const I=e=>{o.classList.add("colortittleApu"),o.classList.remove("colortittleKrusty"),o.classList.remove("colortittleMarge"),s.classList.add("colorBorderCardApu"),s.classList.remove("colorBorderCardKrusty"),s.classList.remove("card__profile-title");for(const t of L)t.classList.add("colortittleApu"),t.classList.remove("colortittleKrusty"),t.classList.remove("colortittleMarge");for(const t of p)t.classList.add("borderApu"),t.classList.remove("borderKrusty"),t.classList.remove("card__icon");r.palette=parseInt(e.target.value)};K.addEventListener("click",I);M.addEventListener("input",e=>{e.preventDefault(),e.target.id==="name"?e.target.value?(o.innerHTML=e.target.value,r.name=e.target.value):o.innerHTML="Ralph Wiggum":e.target.id==="work"?e.target.value?(a.innerHTML=e.target.value,r.job=e.target.value):a.innerHTML="Estudiante de mi cole":e.target.id==="linkedin"?(f.href=e.target.value,r.linkedin=e.target.value):e.target.id==="github"?(v.href="https://github.com/"+e.target.value,r.github="https://github.com/"+e.target.value):e.target.id==="telefono"?(y.href="tel:"+e.target.value,r.phone="tel:"+e.target.value):e.target.id==="email"&&(h.href="mailto:"+e.target.value,r.email="mailto:"+e.target.value)});console.log(r);const B=document.querySelector(".js-buttonShare"),P=e=>{e.preventDefoult(),console.log("ha hecho click")};B.addEventListener("click",P);const c=new FileReader,T=document.querySelector(".js__profile-upload-btn"),j=document.querySelector(".js__profile-image"),b=document.querySelector(".js__profile-preview");function H(e){const t=e.currentTarget.files[0];c.addEventListener("load",F),c.readAsDataURL(t)}function F(){j.src=c.result,b.style.backgroundImage=`url(${c.result})`}T.addEventListener("change",H);const W=document.querySelector(".js-buttonReset"),G=document.querySelector(".js-form"),l={name:"Ralph Wiggum",job:"Estudiante de mi cole",email:"mailto:",phone:"tel:",linkedin:" ",github:"https://github.com/",image:"./images/ralph.jpg"},U=e=>{G.reset(),o.innerHTML=l.name,a.innerHTML=l.job,h.href=l.email,y.href=l.phone,f.href=l.linkedin,v.href=l.github,j.src=l.image,b.style.backgroundImage="",k()};W.addEventListener("click",U);
//# sourceMappingURL=main.js.map
