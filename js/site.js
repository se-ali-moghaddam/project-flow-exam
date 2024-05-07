const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const steps = document.querySelectorAll('.circle');

let currentActive = 1;
prevBtn.disabled = true;

prevBtn.addEventListener('click', () => {
    currentActive--;

    if(currentActive > steps.length)
        currentActive = steps.length;

    updateProgress();
});

nextBtn.addEventListener('click', () => {
    currentActive++;

    if(currentActive < 1)
        currentActive = 1;

    updateProgress();
});

function updateProgress(){    
    for(let [idx, step] of steps.entries()){
        if(idx < currentActive)
            step.classList.add('active');
        else
            step.classList.remove('active');
    }

    let activeSteps = document.querySelectorAll('.active');
    progressBar.style.width = ((activeSteps.length - 1) / (steps.length - 1) * 100 + '%');

    if(currentActive === 1)
        prevBtn.disabled = true;
    else if(currentActive === steps.length)
        nextBtn.disabled = true;
    else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}