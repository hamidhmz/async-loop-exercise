for (let i = 0; i < 100000000000; i++) {
    console.log(i);

    setTimeout(() => {
        console.log('hi');
    }, 1000);
}
