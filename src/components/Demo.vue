<template>
  <div>
    <div>
      <p>My birthday: {{ birthdayStr }}</p>

      <p>Years I've been around: <span v-for="year in years" :key="year" class="year" :class="{ 'is-leap': isLeapYear(year) }"> {{ year }} </span></p>

      <p>Leap years I've experienced: <span v-for="year in leapYears" :key="year" class="leap-year"> {{ year }} </span></p>
    </div>
  </div>
</template>

<script>
import _range from 'lodash/range'
import moment from 'moment'

const myBirthday = '1984-12-23'

export default {
  computed: {
    birth () {
      return moment(myBirthday, 'YYYY-MM-DD')
    },
    
    birthdayStr () {
      return this.birth.format('Do MMMM YYYY')
    },

    now () {
      return moment()
    },

    years () {
      return _range(this.birth.year(), this.now.year())
    },

    leapYears () {
      return this.years.filter(this.isLeapYear)
    }
  },

  methods: {
    isLeapYear (year) {
      return moment(year + '', 'YYYY').dayOfYear(366).year() === year
    }
  }
}
</script>

<style scoped>
.year.is-leap {
  color: red;
}
</style>