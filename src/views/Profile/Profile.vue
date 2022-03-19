<template>
  <div class="profile">
    <div class="profile-picture__wrapper">
      <ProfilePicture />
    </div>
    <div class="profile-info">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore est illo
      possimus quaerat quod. Consectetur culpa dolor doloribus illo in iure
      reiciendis repellendus velit. Adipisci alias asperiores, aut corporis
      deleniti dolorem dolorum ea earum eligendi eos et facere fuga id molestiae
      nisi optio perspiciatis quo quod ratione suscipit temporibus totam velit?
      Deleniti doloribus ex hic quod rem sed tempora? Accusamus asperiores
      blanditiis commodi maxime, recusandae ut vel voluptatem? Ab alias enim ex
      excepturi facere id nobis perferendis placeat, porro sapiente sunt
      temporibus vitae. Alias consectetur corporis debitis delectus dolor eos
      minima nihil repellendus, tenetur voluptatum? Ab accusamus ad aperiam
      aspernatur beatae consequatur cupiditate distinctio doloremque et fuga id
      illo inventore itaque laborum molestiae neque nulla numquam officia porro
      quaerat quibusdam sapiente similique sit, suscipit tenetur totam
      voluptates. Amet animi asperiores aspernatur aut consectetur consequuntur
      deleniti deserunt doloremque earum eum fugiat, in itaque nam natus nostrum
      odio odit perferendis placeat quaerat quasi quod ratione, repellendus
      reprehenderit rerum suscipit tempora tenetur totam ullam unde veritatis
      vero voluptas voluptate voluptatum! Alias dicta distinctio dolore error
      eum eveniet expedita id in incidunt iusto laboriosam modi mollitia non
      perferendis praesentium, qui quisquam repudiandae sapiente sed, similique
      tempora tempore veritatis, vero! Ab ad, animi atque autem consectetur
      dolores dolorum ducimus, eveniet facilis inventore labore maiores, modi
      mollitia numquam qui repellat repudiandae soluta tempore tenetur ut! Ab
      aliquam delectus dolor, dolorem et exercitationem iusto laudantium minima
      molestiae nam pariatur provident quaerat quidem, repellat, repudiandae
      vitae voluptas? Accusamus ad alias asperiores atque consectetur dicta
      dignissimos impedit iusto, laboriosam mollitia obcaecati odit perspiciatis
      quaerat quas qui, reprehenderit veniam voluptatem. Accusamus accusantium
      aliquam animi delectus est, eveniet, facilis fugit magnam nesciunt nihil
      omnis porro quae rerum tempore voluptatem. Consequuntur cupiditate dolorem
      ducimus error excepturi facilis fuga, harum nemo nesciunt odit possimus
      reiciendis repellat reprehenderit sed tempora! Cum esse maxime nam, natus
      nihil odio quam rerum sapiente sint unde. Aspernatur consectetur cum
      doloribus ex minus nobis non nostrum numquam officiis perspiciatis
      possimus, quaerat, sequi sit ullam vitae. Consequuntur fuga fugiat harum
      inventore laborum laudantium magnam natus nostrum, officia, sapiente sequi
      totam ullam unde. A autem debitis eveniet ex neque quam quod? Accusamus
      amet debitis, ex exercitationem illum odio odit perspiciatis! A ab alias
      atque beatae consequatur esse eum excepturi exercitationem fugiat incidunt
      itaque laborum minus natus necessitatibus nesciunt nihil nobis non
      praesentium quia ratione, rem reprehenderit, rerum sequi voluptate
      voluptates. Autem culpa numquam tempore! Deserunt dignissimos eveniet
      fugiat incidunt libero possimus quae recusandae sequi voluptate
      voluptatibus. Illum natus quis vero voluptatum. Aperiam at debitis enim
      hic id libero magnam, nulla tenetur. Accusantium ad aliquam aspernatur,
      consequatur deserunt dolor, ducimus ea enim est fugiat harum iste iusto
      magni mollitia nobis non odit officia quae quaerat quidem reiciendis
      repellendus rerum sapiente sunt tempore ullam voluptatem voluptates. A ad
      adipisci amet aperiam at cumque debitis deserunt distinctio dolore dolorem
      dolores dolorum eaque enim excepturi expedita explicabo harum in inventore
      libero maxime molestiae molestias natus nihil numquam officia perferendis
      praesentium provident qui quia quo quod saepe sequi, voluptates. Commodi
      eum magnam nesciunt, praesentium qui tempore?
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfilePicture from '@/views/Profile/blocks/ProfilePicture.vue'

export default defineComponent({
  name: 'Main',
  components: { ProfilePicture },
  data() {
    return {
      inputValue: null,
    }
  },
})
</script>

<style scoped lang="scss">
.profile {
  .profile-picture__wrapper {
    position: sticky;
    top: -400px;
  }
  .profile-info {
    padding-top: 60px;
  }
}
</style>
