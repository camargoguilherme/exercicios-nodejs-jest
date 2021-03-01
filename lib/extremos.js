class Extremos {

	constructor() {

	}


	acharExtremos(vetor) {
		if(vetor == null)
            throw 'vetor nao pode ser nulo';

        if(vetor.length == 0)
            throw 'vetor com zero elementos';
        
        let menor = vetor[0];
        let maior = vetor[0];
        let indiceMenor = 0;
        let indiceMaior = 0;

        for (let i = 1; i < vetor.length; i++) {
            if(vetor[i] < menor) {
                menor = vetor[i];
                indiceMenor = i;
            }
            if(vetor[i] > maior){
                maior = vetor[i];
                indiceMaior = i;
            }
        }

        return {menor, indiceMenor, maior, indiceMaior};
        
	}

}

module.exports = Extremos;