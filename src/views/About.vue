<template>
  <div class="about">
    <div class="container d-flex align-items-center flex-column">
      <form class="w-50" style="max-width:500px">
        <div class="form-group">
          <label for="地址">地址</label>
          <div id="twzipcode"></div>
        </div>
        <input type="button" value="送出預訂資料" class="btn-primary" @click="store">
      </form>
    </div>
  </div>
</template>
<script>
/* global $ */

export default {
  data () {
    return {
      form: {
        county: '',
        district: '',
        zipcode: ''
      }
    }
  },
  mounted () {
    $('#twzipcode').twzipcode()
  },
  created () {
    const vm = this
    vm.form.county = $('#twzipcode').twzipcode('get', 'county')[0]
    vm.form.district = $('#twzipcode').twzipcode('get', 'district')[0]
    vm.form.zipcode = $('#twzipcode').twzipcode('get', 'zipcode')[0]  
  },
  methods: {
    store () {
      const vm = this
      vm.form.county = $('#twzipcode').twzipcode('get', 'county')[0]
      vm.form.district = $('#twzipcode').twzipcode('get', 'district')[0]
      vm.form.zipcode = $('#twzipcode').twzipcode('get', 'zipcode')[0]
      reset()
    },
    reset () {
      const vm = this
      vm.form.county = ''
      vm.form.district = ''
      vm.form.zipcode = ''
      $('#twzipcode').twzipcode('reset')
    }
  }
}
</script>