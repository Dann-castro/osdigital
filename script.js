  const hoje = new Date();
 
  const dataFormatada = hoje.toISOString().split('T')[0];
 
  document.getElementById('data').value = dataFormatada;

  campoData.disabled = true;

 