<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';

const router = useRouter();

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
  },
]);

const appointments = ref([]);
function openNewAppointmentPage() {
  router.push({ name: 'novateleinterconsulta' });
}
</script>

<template>
  <div class="page-container">
    <header>
      <button class="header-button" @click="openNewAppointmentPage">
        Agendar nova consulta
      </button>
    </header>
    <q-table
      title="Consultas"
      :columns="tableColumns"
      :rows="appointments"
      row-key="id"
      class="appointment-table"
      bordered
      flat
    />
  </div>
</template>

<style scoped>
  .page-container {
    min-height: 100%;
  }

  .appointment-table {
    height: 100%;
  }

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 4rem;
    padding: 1rem;
  }

  .header-button {
    padding: 4px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    cursor: pointer;
  }
</style>
