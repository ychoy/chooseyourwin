  function verifybox()
    {
      if (document.myform.checkbox1.checked && document.myform.checkbox2.checked && document.myform.checkbox3.checked) {
        document.getElementById("demo1").innerHTML = 'You are prepared for the interview. <a href="s4.html">Next</a>';
      }
      else if (document.myform.checkbox1.checked && document.myform.checkbox2.checked) {
        document.getElementById("demo1").innerHTML = 'It is important to prepare for interview questions. <a href="https://www.job-hunt.org/recruiters/smart-job-interview-answers.shtml" target="_blank">View common interview questions here</a>. ';
      } 
      else if (document.myform.checkbox1.checked && document.myform.checkbox3.checked) {
        document.getElementById("demo1").innerHTML = 'Know salary information so you can negotiate proper salary. You can view salary information on <a href="https://www.glassdoor.com/index.htm" target="_blank">Glassdoor</a>.';
      }
      else if (document.myform.checkbox2.checked && document.myform.checkbox3.checked) {
        document.getElementById("demo1").innerHTML = 'Know the company. Visit the company website to learn more.';
      }
      else if (document.myform.checkbox1.checked) {
        document.getElementById("demo1").innerHTML = 'Know salary information so you can negotiate proper salary. You can view salary information on <a href="https://www.glassdoor.com/index.htm" target="_blank">Glassdoor</a>.<br><br> It is important to prepare interview questions. <a href="https://www.job-hunt.org/recruiters/smart-job-interview-answers.shtml" target="_blank">View common interview questions here</a>.';
      }
      else if (document.myform.checkbox2.checked) {
        document.getElementById("demo1").innerHTML = 'Know the company. Visit the company website to learn more. <br><br>It is important to prepare for interview questions. <a href="https://www.job-hunt.org/recruiters/smart-job-interview-answers.shtml" target="_blank">View common interview questions here</a>.';
      }
      else if (document.myform.checkbox3.checked) {
        document.getElementById("demo1").innerHTML = 'Know salary information so you can negotiate proper salary. You can view salary information on <a href="https://www.glassdoor.com/index.htm" target="_blank">Glassdoor</a>. <br><br>It is important to prepare interview questions. <a href="https://www.job-hunt.org/recruiters/smart-job-interview-answers.shtml" target="_blank">View common interview questions here</a>.';
      }
      else {
      document.getElementById("demo1").innerHTML = 'It is important to be prepared for interviews';
      }
    }