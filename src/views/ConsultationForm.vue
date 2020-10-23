<template>
  <div>
    <section id="user-form">
      <div class="form-area">
        <div class="form-header">
          <div class="step-number">
            <p>Step:3</p>
          </div>
          <h2 class="form-message">ご相談内容をご記入ください</h2>
        </div>
        <div class="form-body">
          <div class="form-group">
            <label for="consultation" class="form-item">-ご相談内容-</label>
            <textarea
              name="consultation"
              id="consultation"
              rows="20"
              v-model="consultation"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="form-group">
        <router-link to="/confirm-form">
        <div class="form-botton">
          <input class="form-control" type="submit" value="次へ進む" />
        </div>
        </router-link>
        <router-link to="/question-form">
          <div class="return-botton">
            <input class="form-control" type="submit" value="戻る" />
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    consultation: {
      get(){
        return this.$store.getters.consultation;
      },
      set(value){
        this.$store.dispatch('choiceConsultation', value);
      }
    },
  }
}
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
