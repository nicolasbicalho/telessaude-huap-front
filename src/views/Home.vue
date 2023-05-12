<script setup>
import { ref } from 'vue';
import moment from 'moment';
import { consultationMock } from '@/mocks/teleinterconsulta.mocks';

const tableColumns = ref([
  {
    name: 'id',
    required: true,
    label: 'ID',
    field: 'id',
  }, {
    name: 'doctorName',
    required: true,
    label: 'Responsável',
    field: 'doctorName',
    sortable: true,
  }, {
    name: 'consultationStartDate',
    required: true,
    label: 'Data de início',
    field: 'consultationStartDate',
    format: date => date ? moment(date).format('DD/MM/YYYY hh:mm:ss') : '',
    sortable: true,
  }, {
    name: 'consultationFinishDate',
    required: true,
    label: 'Data de término',
    field: 'consultationFinishDate',
    format: date => date ? moment(date).format('DD/MM/YYYY hh:mm:ss') : '', 
    sortable: true,
  }, {
    name: 'jitsiMeetUrl',
    required: true,
    label: 'URL da Consulta',
    field: 'jitsiMeetUrl',
  }
]);

</script>

<template>
  <div class="home-container">
    <q-table
      flat bordered
      title="Consultas"
      :rows="consultationMock"
      :columns="tableColumns"
      row-key="id"
    />
  </div>
</template>

<style scoped>
  .home-container {
    height: 100%;
    display: flex;
  }
</style>
