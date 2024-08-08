<script setup lang="ts">
</script>

<template>
  <div id="education" class="education">
    <div class="work-item" v-for="education in educations" :key="education.id">
        <div class="column work-left">
            <p>{{ education.dateRange }}</p>
        </div>
        <div class="column work-right">
            <div class="role">
                <p>{{ education.role }}</p>
            </div>
            <div class="company">
                <p>{{ education.company }}</p>
            </div>
            <div class="job">
                <p>{{ education.job }}</p>
            </div>
        </div>
    </div>
  </div>
  <div id="experience" class="experience">
    <div class="work-item" v-for="experience in experiences" :key="experience.id">
        <div class="column work-left">
            <p>{{ experience.dateRange }}</p>
        </div>
        <div class="column work-right">
            <div class="role">
                <p>{{ experience.role }}</p>
            </div>
            <div class="company">
                <p>{{ experience.company }}</p>
            </div>
            <div class="job">
                <p>{{ experience.job }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkExperienceBlock',
  data() {
    return {
      educations: [
        { id: 1, dateRange: 'SEP 2024 — PRESENT', company: '@ University of Oxford', role: 'MSc Mathematical Modelling and Scientific Computing', job: 'The Masters in Mathematical Sciences Scholar and MMSC Bursary Recipient for Academic Excellence'},
        { id: 2, dateRange: 'SEP 2021 — JUN 2024', company: '@ University of Warwick', role: 'BSc Mathematics and Physics', job: 'Grade: First Class.'},
      ],
      experiences: [
        { id: 1, dateRange: 'MAY 2023 — PRESENT', company: '@ University of Warwick, Department of Physics', role: 'URSS Researcher', job: 'Received funding under the Undergraduate Research Support Scheme to carry out a self-directed research project. This largly focused on "Large-Angle Convergent-Beam Electron Diffraction Patterns via Conditional Generative Adversarial Networks", supervised by Prof. Rudolf Roemer.'},
        { id: 2, dateRange: 'JUN 2021 — JUN 2021', company: '@ UK Government, Department of Digital, Culture, Media & Sport', role: 'Information, Technology Support Technician', job: 'Provided 1st- and 2nd-line support for DCMS'},
        { id: 3, dateRange: 'FEB 2020 — Sep 2020', company: '@ The Economist', role: 'Information Technology Operations Analyst', job: 'Developed PowerShell scripts and an application to automate administrative tasks. Created/maintained documentation'},
        { id: 4, dateRange: 'FEB 2019 — OCT 2019', company: '@ Selfridges & Co.', role: 'Computer Services Analyst', job: 'Extracted and performed data analysis from Active Directory. Created a PowerShell GUI program for the team to perform device management'},
        { id: 5, dateRange: 'JAN 2017 — AUG 2021', company: 'Self-employed', role: ' Electrical Tester', job: 'Tested the electrics within a multitude of banks and data centers'},
      ],
    };
  },
};
</script>

<style>

.education {
  margin-top: 50px;
}

.experience {
  margin-top: 50px;
}

.column {
    display: inline-block;
    padding: 0px;
    margin: 0px;
}

.column:nth-child(n + 2) {
  display: inline-table;
}

.work-left {
    font-size: 12px;
    width: 30%;
    min-width: 150px;
    max-width: 150px;
}

.work-right {
    width: 65%;
    align: left;
}

.role {
    font-size: 20px;
    color: #33AD63;
    line-height: 1.3;
    font-family: ZT Chintzy Bold;
}

.company {
    margin-top: -15px;
    font-size: 20px;
    line-height: 1.2;
    font-family: ZT Chintzy Reg;
}

.job {
    font-size: 16px;
}

</style>
