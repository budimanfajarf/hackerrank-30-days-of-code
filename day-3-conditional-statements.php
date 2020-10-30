<?php

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%d\n", $N);

$weird = 'Weird';
$notWeird = 'Not Weird';

if ($N % 2 != 0) {
    printf($weird);
}
else {
    if ($N >= 2 && $N <= 5)
        printf($notWeird);
    else if ($N >= 6 && $N <= 20)
        printf($weird);
    else if ($N > 20)
        printf($notWeird);
}

fclose($stdin);
