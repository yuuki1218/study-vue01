<template>
  <div>
    <section id="user-form">
      <div class="form-area">
        <div class="form-header">
          <div class="step-number">
            <p>Step:2</p>
          </div>
          <h2 class="form-message">以下の質問に答えてください。</h2>
        </div>
        <div class="form-body">
          <div class="question-form-group">
            <p>現在、生命保険に加入されていますか？</p>
            <br />
            <input
              class="form-control"
              type="radio"
              name="question1"
              id="gendar"
              value='はい'
              v-model="question1"
              @click="showQuestion"
            />はい
            <input
              class="form-control"
              type="radio"
              name="question1"
              id="gendar"
              value="いいえ"
              v-model="question1"
              @click="showQuestion"
            />いいえ
          </div>
          <div class="question-form-group" v-show="inviewQuestion">
            <p>
              現在は入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を進められたことはありますか？
            </p>
            <br />
            <input
              class="form-control"
              type="radio"
              name="question2"
              id="gendar"
              value="はい"
              v-model="question2"
              @click="showQuestion2"
            />はい
            <input
              class="form-control"
              type="radio"
              name="question2"
              id="gendar"
              value="いいえ"
              v-model="question2"
              @click="showQuestion2"
            />いいえ
          </div>
          <div class="question-form-group" v-show="inviewQuestion2">
            <p>
              過去5年以内に病気や怪我で、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
            </p>
            <br />
            <input
              class="form-control"
              type="radio"
              name="question3"
              id="gendar"
              value="はい"
              v-model="question3"
            />はい
            <input
              class="form-control"
              type="radio"
              name="question3"
              id="gendar"
              value="いいえ"
              v-model="question3"
            />いいえ
          </div>
        </div>
      </div>
      <div class="form-group">
        <router-link to="/consultation-form">
          <div class="form-botton">
            <input class="form-control" type="submit" value="次へ進む" />
          </div>
        </router-link>
        <router-link to="/">
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
  data() {
    return {
      inviewQuestion: false,
      inviewQuestion2: false,
    };
  },
  methods: {
    showQuestion() {
      this.inviewQuestion = true;
    },
    showQuestion2() {
      this.inviewQuestion2 = true;
    },
  },
  computed: {
    question1: {
      get(){
        return this.$store.getters.question1;
      },
      set(value){
        this.$store.dispatch('choiceQuestion1', value);
      }
    },
    question2: {
      get(){
        return this.$store.getters.question2;
      },
      set(value){
        this.$store.dispatch('choiceQuestion2', value);
      }
    },
    question3: {
      get(){
        return this.$store.getters.question3;
      },
      set(value){
        this.$store.dispatch('choiceQuestion3', value);
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
