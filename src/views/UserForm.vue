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
            <label for="gender" class="form-item">-性別-</label>
            <input
              class="form-control"
              type="radio"
              name="gendar"
              id="gendar"
              value="男性"
            />男性
            <input
              class="form-control"
              type="radio"
              name="gendar"
              id="gendar"
              value="女性"
            />女性
          </div>
          <div class="form-group">
            <label for="age" class="form-item">-生年月日-</label>
            <input class="form-control" type="date" name="age" id="age" />
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
  name: 'UserForm',
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
