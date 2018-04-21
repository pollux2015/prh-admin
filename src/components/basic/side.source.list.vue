<template>
  <div class="side-source-list">
    <mu-list>
      <mu-list-item title="Sent mail">
        <mu-icon slot="left" value="send" />
      </mu-list-item>
      <mu-list-item title="Drafts">
        <mu-icon slot="left" value="drafts" />
      </mu-list-item>
      <mu-list-item title="Inbox" toggleNested>
        <mu-icon slot="left" value="inbox" />
        <mu-list-item slot="nested" title="Starred">
          <mu-icon slot="left" value="grade" />
        </mu-list-item>
        <mu-list-item slot="nested" disabled title="Sent mail" toggleNested>
          <mu-icon slot="left" value="send" />
          <mu-list-item title="Drafts" slot="nested">
            <mu-icon slot="left" value="drafts" />
          </mu-list-item>
        </mu-list-item>
        <mu-list-item slot="nested" title="Inbox" toggleNested>
          <mu-icon slot="left" value="inbox" />
          <mu-list-item title="Drafts" slot="nested">
            <mu-icon slot="left" value="drafts" />
          </mu-list-item>
        </mu-list-item>
      </mu-list-item>
    </mu-list>
    </mobile-tear-sheet>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
