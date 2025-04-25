type Datos = {
    peso: number;
    altura: number;
  };
  
  const imc: Datos[] = [
    { peso: 78, altura: 1.9 },
    { peso: 45, altura: 1.54 },
    { peso: 60, altura: 1.7 }
  ];
  
  const calcular = (peso: number, altura: number): string => {
    const res = peso / (altura * altura);
    if (res < 18.5) {
      return `Bajo peso`;
    } else if (res >= 18.5 && res <= 24.9) {
      return `Peso normal`;
    } else if (res >= 25 && res <= 29.9) {
      return `Sobrepeso`;
    } else {
      return `Obesidad`;
    }
  };
  
  imc.forEach((dato) => {
    console.log(`IMC para peso ${dato.peso} y altura ${dato.altura}: ${calcular(dato.peso, dato.altura)}`);
  });