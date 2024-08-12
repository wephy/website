<script setup lang="ts">
</script>

<template>
  <div id="education" class="education">
    <div class="column work-left">
      <p>Sep 2024 – Present</p>
    </div>
    <div class="column work-right">
      <div class="company">
        <p>University of Oxford</p>
      </div>
      <div class="role">
        <p>Master of Science in Mathematical Modelling and Scientific Computing</p>
      </div>
      <!-- <div class="job">
          <p>{{ education.grade }}</p>
        </div> -->
      <div class="job">
        <p>The Masters in Mathematical Sciences Scholar (fully funded) and MMSC Bursary Recipient for Academic
          Excellence.</p>
      </div>
    </div>
    <div class="column work-left">
      <p>Sep 2021 – Jun 2024</p>
    </div>
    <div class="column work-right">
      <div class="company">
        <p>University of Warwick</p>
      </div>
      <div class="role">
        <p>Bachelor of Science in Mathematics and Physics</p>
      </div>
      <div class="job">
        <p>Grade: <b>First Class Honours</b></p>
      </div>
      <div class="job">
        <p>Founder and president of The Poincaré Project which produced a yearly magazine focussed on the intersection
          of mathematics, physics, and computer science.</p>
      </div>
    </div>
  </div>

  <!-- EXPERIENCE -->

  <div id="education" class="education">
    <div class="column work-left">
      <p>May 2023 – Present</p>
    </div>
    <div class="column work-right">
      <div class="company">
        <p>University of Warwick, Department of Physics</p>
      </div>
      <div class="role">
        <p>URSS Researcher</p>
      </div>
      <!-- <div class="job">
          <p>{{ education.grade }}</p>
        </div> -->
      <div class="job">
        <p>Received funding to carry out a self-directed machine learning research project.</p>
      </div>
    </div>
    <div class="column work-left">
      <p>Jan 2017 – Aug 2021</p>
    </div>
    <div class="column work-right">
      <div class="company">
        <p>Self-employed</p>
      </div>
      <div class="role">
        <p>Electrical Tester</p>
      </div>
      <div class="job">
        <p>Contracted electrical testing of banks and data centres in Central London.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkExperienceBlock',
  data() {
    return {
      experiences: [
        {
          id: 1,

        },
        {
          id: 2,
          dateRange: '',
          company: '',
          role: '',
          job: ''
        },
        {
          id: 3,
          dateRange: 'Jun 2021 – Jun 2021',
          company: 'UK Government, Department of Digital, Culture, Media & Sport',
          role: 'Information, Technology Support Technician',
          job: 'Provided 1st- and 2nd-line support for DCMS from within the lovely building of 100 Parliament St.'
        },
        {
          id: 4,
          dateRange: 'Feb 2020 – Sep 2020',
          company: 'The Economist',
          role: 'Information Technology Operations Analyst',
          job: 'Developed PowerShell scripts and an application to automate administrative tasks. Created/maintained documentation'
        },
        {
          id: 5,
          dateRange: 'Feb 2019 – Oct 2019',
          company: 'Selfridges & Co.',
          role: 'Computer Services Analyst',
          job: 'Extracted and performed data analysis from Active Directory. Created a PowerShell GUI program for the team to perform device management'
        },
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
  margin-top: 0px;
}

.column:nth-child(n + 2) {
  display: inline-table;
  /* padding: 0; */
  /* margin-top: 0; */
}

.work-left {
  position: flex;
  font-size: 12px;
  width: 20%;
  min-width: 120px;
  max-width: 120px;
  font-family: 'Alegreya Sans';
  font-style: italic;
  /* margin-bottom: -24px; */
  line-height: 1;
}

.work-right {
  width: 65%;
  min-width: 200px;
}

.company {
  font-size: 18px;
  font-family: 'Alegreya Sans ExtraBold';
  /* margin-bottom: -16px; */
  line-height: 1;
}

.role {
  font-size: 16px;
  /* color: #33AD63; */
  line-height: 1.3;
  font-family: 'Alegreya Sans';
  /* margin-bottom: -12px; */
}

.job {
  font-size: 16px;
  /* margin-top: 0px; */
  /* margin-bottom: -8px; */
  line-height: 1.1;
}

/* Responsive Styles */
@media (max-width: 1000px) {
  .work-left {
    width: 90%;
    display: flex;
  }

  .work-right {
    width: 90%;
    display: flex;
  }

  .company {
    /* margin-top: 0px; */
    /* display: flex; */
  }

  .role {
    /* display: flex; */
  }

}
</style>
