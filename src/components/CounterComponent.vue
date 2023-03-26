<template>
    <div class="wrapper flex">
        <div class="top flex">
            <div v-if="hours > 0">
                {{ hours }}:
            </div>
            <div v-if="minutes > 0">
                {{ minutes }}:
            </div>
            {{ second }}
        </div> 
        <div class="bottom flex">
            <div v-if="interval == null">
                <div @click="onStartInterval" class="play"></div>
            </div>
            <div v-else>
                <div @click="onStopInterval" class="pause flex">
                    <div class="pause__path"></div>
                    <div class="pause__path"></div>
                </div>
            </div>
            <div @click="onReset" class="stop"></div>
        </div> 
    </div>
</template>

<script>

export default {
    data() {
        return {
            hours: 0,
            minutes: 0,
            seconds: 0,
            interval: null
        }
    },
    computed: {
        second: {
            get() {
                return this.seconds;
            }
        }
    },
    methods: {
        onStartInterval() {
            this.interval = setInterval(this.incrementSeconds, 1000);
        },
        onStopInterval() {
            clearInterval(this.interval);
            this.interval = null;
        },
        incrementSeconds() {
            this.seconds++;
            if (this.seconds == 60) {
                this.seconds = 0;
                this.minutes++;
            }
            if (this.minutes == 60) {
                this.minutes = 0;
                this.hours++;
            }
        },
        onReset() {
            clearInterval(this.interval);
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
            this.interval = null;
        }
    }
}
</script>

<style scoped>
    .flex {
        display: flex;
    }
    .top, .bottom {
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .top {
        font-family: 'Gotham Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 21px;
        text-align: center;
        color: var(--grey);
        border-bottom: 1px solid var(--grey);
    }
    .bottom {
        justify-content: space-between;
        width: 85px;
        height: 20px;
        margin: 20px 70px 20px 70px;
    }
    .play {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-left: 17px solid var(--grey);
        border-bottom: 10px solid transparent;
        cursor: pointer;
    }
    .pause {
        width: 10px;
        margin: 0 5px;
        height: 20px;
        justify-content: space-between;
        cursor: pointer;
    }
    .pause__path {
        width: 3px;
        height: 20px;
        background-color: var(--grey);
    }
    .stop {
        width: 20px;
        height: 20px;
        background-color: var(--grey);
        cursor: pointer;
    }
    .add {
        width: 20px;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .add__plus {
    background: var(--grey);
    height: 20px; 
    width: 3px;
    position: relative;
    }

    .add__plus:first-child {
        transform: translateX(50%)
    }

    .add__plus:last-child {
        transform: rotate(90deg);
        left: -1.5px;
    }
</style>