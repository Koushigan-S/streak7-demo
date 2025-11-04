document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("click",e=>{
      const ripple=document.createElement("span");
      ripple.className="ripple";
      btn.appendChild(ripple);
      ripple.style.left=e.offsetX+"px";
      ripple.style.top=e.offsetY+"px";
      setTimeout(()=>ripple.remove(),600);
    });
  });

  // checkboxes
  document.querySelectorAll(".checkbox").forEach(c=>{
    c.addEventListener("click",()=>{
      c.classList.toggle("checked");
    });
  });
});

// Example API call
async function loginUser(){
  const email=document.querySelector("#email").value;
  const password=document.querySelector("#password").value;
  const res=await fetch(`${API_BASE_URL}/auth/login`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email,password})
  });
  const data=await res.json();
  if(data.success){
    localStorage.setItem("token",data.token);
    window.location="dashboard.jsp";
  }else alert(data.message);
}
