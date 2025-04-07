function calculateAge() {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");
  
    if (!dob) {
      result.textContent = "Please select your date of birth.";
      return;
    }
  
    const birthDate = new Date(dob);
    const today = new Date();
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    result.textContent = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
  }
  