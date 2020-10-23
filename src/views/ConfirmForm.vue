<template>
  <div>
    <section id="user-form">
      <div class="form-area">
        <div class="form-header">
          <div class="step-number">
            <p>Step:4</p>
          </div>
          <h2 class="form-message">以下の内容をご確認ください。</h2>
        </div>
        <div class="form-body">
          <div class="form-group">
            <label for="gender" class="form-item">-性別-</label>
            <p>{{ showGender }}</p>
          </div>
          <div class="form-group">
            <label for="birthday" class="form-item">-生年月日-</label>
          <p>{{ showBirthDay }}</p>
          </div>
          <div class="question-form-group">
            <p>現在、生命保険に加入されていますか？</p>
            <p>{{ showQuestion1 }}</p>
            <br />
          </div>
          <div class="question-form-group">
            <p>
              現在は入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を進められたことはありますか？
            </p>
            <p>{{ showQuestion2 }}</p>
            <br />
          </div>
          <div class="question-form-group">
            <p>
              過去5年以内に病気や怪我で、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
            </p>
            <p>{{ showQuestion3 }}</p>
            <br />
          </div>
          <p>-相談内容-</p>
          <p>{{ showConsultation }}</p>
        </div>
      </div>
      <div class="form-group">
        <div class="form-botton">
          <div class="form-botton">
            <input class="form-control" type="submit" value="送信" />
          </div>
          <router-link to="/consultation-form">
            <div class="return-botton">
              <input class="form-control" type="submit" value="戻る" />
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    showGender() {
      return this.$store.getters.gender;
    },
    showBirthDay() {
      return this.$store.getters.birthday;
    },
    showQuestion1() {
      return this.$store.getters.question1;
    },
    showQuestion2() {
      return this.$store.getters.question2;
    },
    showQuestion3() {
      return this.$store.getters.question3;
    },
    showConsultation() {
      return this.$store.getters.consultation;
    }
    
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
