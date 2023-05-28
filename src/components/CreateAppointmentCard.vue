<template>
  <div id="create-appointment-card">
      <q-input class="card-inputs" filled v-model="appointmentDescription" label="Descrição (Opcional)" />
      <div class="card-inputs">
        <label for="">Responsáveis</label>
         <q-select
          filled
          v-model="appointmentResponsibles"
          use-input
          use-chips
          multiple
          input-debounce="0"
          :options="filterOptions"
          @filter="filterFn"
          style="width: 250px"
        />
      </div>
      <div class="card-inputs">
        <label for="">Paciente</label>
         <q-select
          filled
          v-model="appointmentPatient"
          use-input
          input-debounce="0"
          :options="filterOptions"
          @filter="filterFn"
          style="width: 250px"
        />
      </div>
      <div class="card-inputs">
        <label for="aaa">Horário</label>
         <q-input filled v-model="appointmentDate">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="appointmentDate" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="appointmentDate" mask="YYYY-MM-DD HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

      </div>
      <div class="card-inputs create-button">
        <q-btn label="Criar Consulta" color="primary" @click="createNewAppointment" />
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['hide-modal'])

// const newAppointmentData = {
//   appointmentDescription: '',
//   appointmentDate: null,
//   appointmentResponsibles: [],
//   appointmentPatient: null,
// }


const appointmentDescription = ref('');
const appointmentDate = ref(null);
const appointmentPatient = ref(null);

const appointmentResponsibles = ref([]);

const responsibleOptions = [
  {
    doctorName: 'Carlos Silva',
  },
  {
    doctorName: 'Maria Souza',
  }
];

const responsibleLabels = responsibleOptions.map(el => el.doctorName)

const filterOptions = ref(responsibleLabels);

function filterFn (val, update) {
  update(() => {
    if (val === '') {
      filterOptions.value = responsibleLabels
    }
    else {
      const needle = val.toLowerCase()
      filterOptions.value = responsibleLabels.filter(
        v => v.toLowerCase().indexOf(needle) > -1
      )
    }
  })
}

function createNewAppointment() {
  emit('hide-modal');
}


</script>

<style scoped>
.card-inputs {
  margin-bottom: 20px;
}

.create-button {
  display: flex;
  justify-content: center;
}

</style>
