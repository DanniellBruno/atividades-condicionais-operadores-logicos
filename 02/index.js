const play01 = 'Pedra'
const play02 = 'Papel'

if (play01 === 'Papel' && play02 === 'Pedra'){
    console.log('Papel cobre Pedra')
} else if (play01 === 'Pedra' && play02 === 'Papel'){
    console.log('Papel cobre Pedra')
} else if (play01 === 'Papel' && play02 === 'Papel'){
    console.log("Empate")
} else if (play01 === 'Pedra' && play02 === 'Pedra'){
    console.log("Empate")
}

