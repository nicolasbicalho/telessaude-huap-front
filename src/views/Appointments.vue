<script setup>
import { ref } from 'vue';
// import { useRouter } from 'vue-router';
import moment from 'moment';
import CreateAppointmentCard from '../components/CreateAppointmentCard.vue';

// const router = useRouter();

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

const showCard = ref(false);
const appointments = ref([]);
</script>

<template>
  <div class="page-container">
    <header>
      <q-btn label="Criar Consulta" color="primary" @click="showCard = true" />
      <q-dialog v-model="showCard" persistent>
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Nova Consulta</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            <CreateAppointmentCard @hide-modal="showCard = false"/>
          </q-card-section>
        </q-card>
      </q-dialog>
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
