<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Experience the <br /> Difference"
              description="Discover unparalleled quality and personalized care that sets us apart from the rest. Your satisfaction, our commitment."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Quality <br/> you can Trust"
              description="Save Time with Our Trusted Household Services - Exceptional Quality Work at Affordable Rates."
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Start with Headers',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Values"
              description="Reliability, Efficiency, and Customer Satisfaction – Our Pillars for Exemplary Household Services."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Trust & Commitment"
              description="Trustworthiness and Commitment are Our Cornerstones, Ensuring Exceptional Household Services and Peace of Mind."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Save Time & Money"
              description="Time-Efficient Solutions at Cost-Effective Rates, Ensuring Savings without Compromising Quality for Your Household Requirements."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="people"
              title="Our Teams"
              description="Our Diverse Team of Experts, including Plumbers, Electricians, Masons, and More, Ensures Comprehensive Solutions with Unmatched Professionalism."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
