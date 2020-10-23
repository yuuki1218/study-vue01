<template>
  <div>
    <section id="user-form">
      <div class="form-area">
        <div class="form-header">
          <div class="step-number">
            <p>Step:1</p>
          </div>
          <h2 class="form-message">お客様の情報を入力してください。</h2>
        </div>
        <div class="form-body">
          <div class="form-group">
            <label class="form-item">-性別-</label>
            <input
              class="form-control"
              type="radio"
              id="man"
              value="男性"
              v-model="gender"
            /><label for="man">男性</label>
            <input
              class="form-control"
              type="radio"
              id="lady"
              value="女性"
              v-model="gender"
            /><label for="lady">女性</label>
          </div>
          <div>
          </div>
          <div class="form-group">
            <label for="birthday" class="form-item">-生年月日-</label>
            <input
              class="form-control"
              type="date"
              name="birthday"
              id="birthday"
              v-model="birthday"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="form-botton">
          <router-link to="/question-form">
            <input class="form-control" type="submit" value="次へ進む" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    gender: {
      get(){
        return this.$store.getters.gender;
      },
      set(value){
        this.$store.dispatch('choiceGender', value);
      }
    },
    birthday: {
      get(){
        return this.$store.getters.birthday;
      },
      set(value){
        this.$store.dispatch('choiceBirthday', value);
      }
    }
  },
};
</script>

<style scoped>
#user-form {
  text-align: center;
}
.form-area {
  padding: 30px;
  border: solid 1px;
}
.form-group {
  margin: 20px;
}
</style>
