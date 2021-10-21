const workCurrent = document.querySelector('.work-card--details-current');
const workPrevious = document.querySelector('.work-card--details-previous');

const playCurrent = document.querySelector('.play-card--details-current');
const playPrevious = document.querySelector('.play-card--details-previous');

const studyCurrent = document.querySelector('.study-card--details-current');
const studyPrevious = document.querySelector('.study-card--details-previous');

const exerciseCurrent = document.querySelector('.exercise-card--details-current');
const exercisePrevious = document.querySelector('.exercise-card--details-previous');

const socialCurrent = document.querySelector('.social-card--details-current');
const socialPrevious = document.querySelector('.social-card--details-previous');

const selfCurrent = document.querySelector('.self-card--details-current');
const selfPrevious = document.querySelector('.self-card--details-previous');

let data = {
    'fetchDailyData': function () {        
        fetch('./data.json')
            .then(response => response.json())
            .then(data => this.displayDailyData(data))
    },

    'fetchWeeklyData': function () {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => this.displayWeeklyData(data))
    },

    'fetchMonthlyData': function () {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => this.displayMonthlyData(data))
    },

    'displayDailyData': function (data) {
        const { current: workDailyCurrent, previous: workDailyPrevious } = data[0].timeframes.daily;
        const { current: playDailyCurrent, previous: playDailyPrevious } = data[1].timeframes.daily;
        const { current: studyDailyCurrent, previous: studyDailyPrevious } = data[2].timeframes.daily;
        const { current: exerciseDailyCurrent, previous: exerciseDailyPrevious } = data[3].timeframes.daily;
        const { current: socialDailyCurrent, previous: socialDailyPrevious } = data[4].timeframes.daily;
        const { current: selfDailyCurrent, previous: selfDailyPrevious } = data[5].timeframes.daily;

        workCurrent.textContent = `${workDailyCurrent}hrs`;
        workPrevious.textContent = `Last week - ${workDailyPrevious} hrs`;
        
        playCurrent.textContent = `${playDailyCurrent}hrs`;
        playPrevious.textContent = `Last week - ${playDailyPrevious}hrs`;

        studyCurrent.textContent = `${studyDailyCurrent}hrs`;
        studyPrevious.textContent = `Last week - ${studyDailyPrevious}hrs`

        exerciseCurrent.textContent = `${exerciseDailyCurrent}hrs`;
        exercisePrevious.textContent = `Last week - ${exerciseDailyPrevious}hrs`;

        socialCurrent.textContent = `${socialDailyCurrent}hrs`;
        socialPrevious.textContent = `Last week - ${socialDailyPrevious}hrs`;

        selfCurrent.textContent = `${selfDailyCurrent}hrs`;
        selfPrevious.textContent = `Last weel - ${selfDailyPrevious}hrs`;
    },

    'displayWeeklyData': function (data) {
        const { current: workWeeklyCurrent, previous: workWeeklyPrevious } = data[0].timeframes.weekly;
        const { current: playWeeklyCurrent, previous: playWeeklyPrevious } = data[1].timeframes.weekly;
        const { current: studyWeeklyCurrent, previous: studyWeeklyPrevious } = data[2].timeframes.weekly;
        const { current: exerciseWeeklyCurrent, previous: exerciseWeeklyPrevious } = data[3].timeframes.weekly;
        const { current: socialWeeklyCurrent, previous: socialWeeklyPrevious } = data[4].timeframes.weekly;
        const { current: selfWeeklyCurrent, previous: selfWeeklyPrevious } = data[5].timeframes.weekly;
        
        workCurrent.textContent = `${workWeeklyCurrent}hrs`;
        workPrevious.textContent = `Last week - ${workWeeklyPrevious} hrs`;
        
        playCurrent.textContent = `${playWeeklyCurrent}hrs`;
        playPrevious.textContent = `Last week - ${playWeeklyPrevious}hrs`;

        studyCurrent.textContent = `${studyWeeklyCurrent}hrs`;
        studyPrevious.textContent = `Last week - ${studyWeeklyPrevious}hrs`

        exerciseCurrent.textContent = `${exerciseWeeklyCurrent}hrs`;
        exercisePrevious.textContent = `Last week - ${exerciseWeeklyPrevious}hrs`;

        socialCurrent.textContent = `${socialWeeklyCurrent}hrs`;
        socialPrevious.textContent = `Last week - ${socialWeeklyPrevious}hrs`;

        selfCurrent.textContent = `${selfWeeklyCurrent}hrs`;
        selfPrevious.textContent = `Last weel - ${selfWeeklyPrevious}hrs`;
    },

    'displayMonthlyData': function (data) {
        const { current: workMonthlyCurrent, previous: workMonthlyPrevious } = data[0].timeframes.monthly;
        const { current: playMonthlyCurrent, previous: playMonthlyPrevious } = data[1].timeframes.monthly;
        const { current: studyMonthlyCurrent, previous: studyMonthlyPrevious } = data[2].timeframes.monthly;
        const { current: exerciseMonthlyCurrent, previous: exerciseMonthlyPrevious } = data[3].timeframes.monthly;
        const { current: socialMonthlyCurrent, previous: socialMonthlyPrevious } = data[4].timeframes.monthly;
        const { current: selfMonthlyCurrent, previous: selfMonthlyPrevious } = data[5].timeframes.monthly;
        
        workCurrent.textContent = `${workMonthlyCurrent}hrs`;
        workPrevious.textContent = `Last week - ${workMonthlyPrevious} hrs`;
        
        playCurrent.textContent = `${playMonthlyCurrent}hrs`;
        playPrevious.textContent = `Last week - ${playMonthlyPrevious}hrs`;

        studyCurrent.textContent = `${studyMonthlyCurrent}hrs`;
        studyPrevious.textContent = `Last week - ${studyMonthlyPrevious}hrs`

        exerciseCurrent.textContent = `${exerciseMonthlyCurrent}hrs`;
        exercisePrevious.textContent = `Last week - ${exerciseMonthlyPrevious}hrs`;

        socialCurrent.textContent = `${socialMonthlyCurrent}hrs`;
        socialPrevious.textContent = `Last week - ${socialMonthlyPrevious}hrs`;

        selfCurrent.textContent = `${selfMonthlyCurrent}hrs`;
        selfPrevious.textContent = `Last weel - ${selfMonthlyPrevious}hrs`;
    }
}

document.querySelector('.daily-link').addEventListener('click', function () {
    data.fetchDailyData()
});

document.querySelector('.weekly-link').addEventListener('click', function () {
    data.fetchWeeklyData()
});

document.querySelector('.monthly-link').addEventListener('click', function () {
    data.fetchMonthlyData()
});

data.fetchDailyData();