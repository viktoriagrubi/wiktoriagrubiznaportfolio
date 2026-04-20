(function () {
  emailjs.init("j6MXjttjaZAW6xZXi");
})();

// ===== UNIWERSALNY FORM HANDLER =====
function handleForm(formId, successMsg) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    // HELP FORM (checkboxy + pełne dane)
    if (formId === "help-form") {
      const data = {
        from_name: formData.get("from_name"),
        reply_to: formData.get("reply_to"),
        phone: formData.get("phone"),
        topic: formData.getAll("topic").join(", "),
        message: formData.get("message"),
      };

      emailjs
        .send("service_1vgu01q", "template_fxh277b", data)
        .then(() => {
          alert(successMsg);
          form.reset();
        })
        .catch((err) => {
          alert("Błąd wysyłki");
          console.error(err);
        });

      return;
    }

    // CAREER FORM
    if (formId === "career-form") {
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        city: formData.get("city"),
        experience: formData.get("experience"),
        message: formData.get("message"),
        availability: formData.getAll("availability").join(", "),
      };

      emailjs
        .send("service_1vgu01q", "template_fxh277b", data)
        .then(() => {
          alert(successMsg);
          form.reset();
        })
        .catch((err) => {
          alert("Błąd wysyłki");
          console.error(err);
        });

      return;
    }

    // CONTACT FORM (stary działa jak był)
    emailjs.sendForm("service_1vgu01q", "template_fxh277b", form).then(
      () => {
        alert(successMsg);
        form.reset();
      },
      (error) => {
        alert("Błąd wysyłki");
        console.error(error);
      },
    );
  });
}

// ===== FORMS =====
handleForm("contact-form", "Wiadomość wysłana ✅");
handleForm("help-form", "Dziękuję! Odezwę się 😊");
handleForm("career-form", "Zgłoszenie wysłane 🚀");

// ===== UI (reszta Twojego kodu zostaje bez zmian) =====
const showMoreButtons = document.querySelectorAll(".show-more-btn");

showMoreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const description = btn.previousElementSibling;
    const isExpanded = description.classList.toggle("expanded");

    if (isExpanded) {
      description.style.height = description.scrollHeight + "px";
      btn.textContent = "Show less";
    } else {
      description.style.height = "3.6rem";
      btn.textContent = "Show more";
    }
  });
});

const revealElements = document.querySelectorAll(
  ".job, .project-item, section h2",
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

revealElements.forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

const cursorGlow = document.createElement("div");
cursorGlow.classList.add("cursor-glow");
document.body.appendChild(cursorGlow);

window.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});
