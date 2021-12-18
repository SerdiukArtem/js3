// Спросить у пользователя сколько ему лет

let userAgeStart = true;

while (userAgeStart) {
        let userAge = prompt('Укажите ваш возвраст ');
        if (userAge === null) {
            userAgeStart = false;
        } else if (+userAge !== +userAge) {
            alert('Укажите числовым значением');
        } else {
            userAge = +userAge;
            if (userAge > 0 && userAge <= 12) {
                alert('Ребёнок');
                userAgeStart = false;
            } else if (userAge > 12 && userAge <= 18) {
                alert('Подросток');
                userAgeStart = false;
            } else if (userAge > 18 && userAge <= 60) {
                alert('Взрослый');
                userAgeStart = false;
            } else if (userAge > 60) {
                alert('Дедушка');
                userAgeStart = false;
            }
        }
    }
