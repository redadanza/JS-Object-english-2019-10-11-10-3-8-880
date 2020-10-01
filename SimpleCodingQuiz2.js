var total = 0;

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };

    for (x in fruit) {
        total = total + fruit[x];
      };

      console.log(total);
