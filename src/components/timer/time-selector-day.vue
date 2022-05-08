<template>
  <div class="time-selector-day">
    <div class="time-selector-day-header">
      <div class="element flex-center" @click="prevYear">
        <svg-icon icon="icon-less"></svg-icon>
      </div>
      <div class="element flex-center" @click="prevMonth">
        <svg-icon icon="icon-left"></svg-icon>
      </div>
      <div>
        {{ `${year}年${month + 1}月${day}日` }}
      </div>
      <div class="element flex-center" @click="nextMonth">
        <svg-icon icon="icon-right"></svg-icon>
      </div>
      <div class="element flex-center" @click="nextYear">
        <svg-icon icon="icon-more"></svg-icon>
      </div>
    </div>
    <div class="time-selector-day-pagination">
      <div
        v-for="(day, index) in weekdays"
        :key="`day${index}`"
        class="cell flex-center"
      >
        {{ day }}
      </div>
    </div>
    <div class="time-selector-day-days">
      <div
        v-for="(dayweek, idx) in days"
        :key="`dayweek${idx}`"
        class="time-selector-day-days-line"
      >
        <div
          v-for="(day, index) in dayweek"
          :key="`day${index}`"
          class="cell flex-center"
          :class="
            isSameDay(current, day.date)
              ? 'selected-cell'
              : day.current
              ? 'white-cell'
              : 'gray-cell'
          "
          @click="updateDate(day.date)"
        >
          {{ day.date.getDate() }}
        </div>
      </div>
    </div>

    <div class="time-selector-day-hours">
      <div class="time-selector-day-hours-time flex-center">
        <div>时：</div>
        <div class="time-box flex-center">{{ hour }}</div>
        <div class="icon-box">
          <svg-icon
            icon="icon-align-top"
            iconClass="icon-align"
            @click="nextHour"
          />
          <svg-icon
            icon="icon-align-bottom"
            iconClass="icon-align"
            @click="prevHour"
          />
        </div>
      </div>
      <div class="time-selector-day-hours-time flex-center">
        <div>分：</div>
        <div class="time-box flex-center">{{ minute }}</div>
        <div class="icon-box">
          <svg-icon
            icon="icon-align-top"
            iconClass="icon-align"
            @click="nextMinute"
          />
          <svg-icon
            icon="icon-align-bottom"
            iconClass="icon-align"
            @click="prevMinute"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    year: {
      type: Number,
      required: true,
      default: () => 0,
    },
    month: {
      type: Number,
      required: true,
      default: () => 0,
    },
    day: {
      type: Number,
      required: true,
      default: () => 0,
    },
    hour: {
      type: Number,
      required: true,
      default: () => 0,
    },
    minute: {
      type: Number,
      required: true,
      default: () => 0,
    },
  },
  computed: {
    days() {
      // 获取当前页面需要展示的所有日期
      // 先获取当前年月
      let year = this.year;
      let month = this.month;
      let day = new Date(year, month, 1).getDay();
      if (day === 0) {
        day = 7;
      }
      // 获取前一个月最后几天
      let lastMonthDays = [];
      if (day > 1) {
        let lastDate = new Date(year, month, 0).getDate();
        console.log(lastDate);
        for (let i = day; i > 1; i--) {
          lastMonthDays.push({
            date: new Date(year, month - 1, lastDate - i + 1),
            current: false,
          });
        }
      }
      // 获取当前月份日期
      // 获取当前月份的最后一天日期
      let currMonthDays = [];
      let currLastDate = new Date(year, month + 1, 0).getDate();
      // 循环放入日期x
      for (let i = 1; i <= currLastDate; i++) {
        currMonthDays.push({ date: new Date(year, month, i), current: true });
      }
      // 获取下一个月最初几天
      let nextMonthDays = [];
      if (day <= 7) {
        for (let i = 1; i <= 42 - day + 1 - currLastDate; i++) {
          nextMonthDays.push({
            date: new Date(year, month + 1, i),
            current: false,
          });
        }
      }
      // 将结果转换为二维数组 7个一组
      let initialData = [...lastMonthDays, ...currMonthDays, ...nextMonthDays];
      let result = [];
      let k = -1;
      initialData.forEach((ele, index) => {
        if (index % 7 === 0) {
          k++;
          result[k] = [];
        }
        result[k].push(ele);
      });
      return result;
    },
    current() {
      return new Date(this.year, this.month, this.day);
    },
  },
  data() {
    return {
      weekdays: ["一", "二", "三", "四", "五", "六", "日"],
    };
  },
  methods: {
    isSameDay: function (day1, day2) {
      return (
        day1.getFullYear() === day2.getFullYear() &&
        day1.getMonth() === day2.getMonth() &&
        day1.getDate() === day2.getDate()
      );
    },

    updateDate: function (d) {
      this.$emit("update:year", d.getFullYear());
      this.$emit("update:month", d.getMonth());
      this.$emit("update:day", d.getDate());
    },

    prevYear: function () {
      this.$emit("update:year", this.year - 1);
    },

    nextYear: function () {
      this.$emit("update:year", this.year + 1);
    },

    prevMonth: function () {
      this.$emit("update:month", this.month - 1);
    },

    nextMonth: function () {
      this.$emit("update:month", this.month + 1);
    },

    prevHour: function () {
      if (this.hour > 0) {
        this.$emit("update:hour", this.hour - 1);
      } else {
        this.$emit("update:hour", 23);
      }
    },

    nextHour: function () {
      this.$emit("update:hour", (this.hour + 1) % 24);
    },

    prevMinute: function () {
      if (this.minute >= 1) {
        this.$emit("update:minute", this.minute - 1);
      } else {
        this.$emit("update:minute", 59);
      }
    },

    nextMinute: function () {
      this.$emit("update:minute", (this.minute + 1) % 60);
    },
  },
};
</script>

<style lang="scss" scoped>
.time-selector-day {
  width: 100%;
  &-header {
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    color: #787878;
    justify-content: space-around;
    box-shadow: 0 1px 2px #ddd;

    .element {
      width: 40px;
      height: 40px;
      transition: all 0.25s ease;
      border-radius: 4px;
      &:hover {
        background-color: #eeeeee;
      }
    }
  }

  &-pagination {
    display: flex;
    width: 100%;
    padding: 0 10px;
    justify-content: space-around;

    .cell {
      width: 40px;
      height: 40px;
      color: #888888;
      border-bottom: 1px solid #cccccc;
    }
  }

  &-days {
    padding: 0 10px;
    margin-top: 10px;
    width: 100%;
    &-line {
      display: flex;
      align-items: center;
      justify-content: space-around;

      .cell {
        width: 40px;
        height: 40px;
        font-weight: 500;
        transition: all 0.25s ease;
        border-radius: 3px;
        &:hover {
          background-color: #eeeeee;
        }
      }
      .white-cell {
        font-weight: 500;
        color: #000;
      }
      .gray-cell {
        font-weight: 300;
        color: #ccc;
      }
      .selected-cell {
        font-weight: 800;
        color: blue;
      }
    }
  }

  &-hours {
    height: 40px;
    display: flex;
    padding: 0px 20px;
    align-items: center;

    &-time {
      width: 200px;
      height: 100%;

      .time-box {
        width: 50px;
        height: 80%;
        box-shadow: inset 0 0 5px #ccc;
      }

      .icon-box {
        height: 80%;
        margin-left: 10px;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
}

.icon-align {
  width: 20px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 2px;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba($color: #aaa, $alpha: 0.5);
  }
}
</style>