<template>
  <div>
    <v-dialog v-model="isOpen" width="500" persistent>
      <v-card class="pa-10">
        <div align="center" class="text-h6">Delete Item?</div>
        <div align="center" class="pa-10">Are you sure you want to delete this item?</div>
        <v-card-actions>
          <v-row align="center">
            <v-col align="end">
              <v-btn color="grey" dark width="150"  @click="cancel">
                Cancel
              </v-btn>
            </v-col>
            <v-col>
              <v-btn width="150"  color="secondary"  @click="confirm"> Confirm </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    props:['isOpen'],
    data(){
        return{

        }
    },
    methods:{
        cancel(){
            this.$emit('cancel');
        },
        confirm(){
            this.$emit('confirm');
        }
    }
};
</script>

<style>
</style>