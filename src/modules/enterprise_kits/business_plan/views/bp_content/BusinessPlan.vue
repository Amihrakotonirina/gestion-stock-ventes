<template>
  <div class="main-content">
    <breadcumb :page="'Business plan'" :folder="'Kits entreprises'" />
      <b-row class="">
        <b-col md="12 mb-30">
          <b-card title="" class="m-5 mt-0 pt-0 p-5">
            <form-wizard
              title
              subtitle
              @on-complete="onComplete"
              shape="circle"
              color="#e30347"
            >
              <tab-content title="Résumés" icon="i-File-Zip">
                <Summary></Summary>
            </tab-content>





              <tab-content title="Description de l'entreprise" icon="i-Building">
                <CompanyOverview></CompanyOverview>
              </tab-content>





              <tab-content title="Produits et services" icon="i-Heart">
                <ProductService></ProductService>
              </tab-content>





              <tab-content title="Etude du marché" icon="i-Clock-4">
                <MarketResearch></MarketResearch>
              <!--b-row>
                <b-col md="6">
                  <h6 class="mb-2">Employees</h6>
                  <label class="checkbox checkbox-primary">
                    <input type="checkbox" checked />
                    <span>Designer</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-secondary">
                    <input type="checkbox" checked />
                    <span>Coder</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-success">
                    <input type="checkbox" checked />
                    <span>QA</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
                <b-col md="6">
                  <h6 class="mb-2">Company</h6>
                  <label class="radio radio-outline-primary">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>Less than 1 Year</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-success">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>1-5 years</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-warning">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>5+ years</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
              </b-row-->
            </tab-content>





              <tab-content title="Stratégie de marketing" icon="i-Idea-2">
                <Strategy></Strategy>
              <b-row>
                <b-col md="6">
                  <h6 class="mb-2">Employees</h6>
                  <label class="checkbox checkbox-primary">
                    <input type="checkbox" checked />
                    <span>Designer</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-secondary">
                    <input type="checkbox" checked />
                    <span>Coder</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-success">
                    <input type="checkbox" checked />
                    <span>QA</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
                <b-col md="6">
                  <h6 class="mb-2">Company</h6>
                  <label class="radio radio-outline-primary">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>Less than 1 Year</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-success">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>1-5 years</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-warning">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>5+ years</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
              </b-row>
            </tab-content>





              <tab-content title="Equipe de management" icon="i-Business-ManWoman">
                <Team>Equipe</Team>
              <b-row>
                <b-col md="6">
                  <h6 class="mb-2">Employees</h6>
                  <label class="checkbox checkbox-primary">
                    <input type="checkbox" checked />
                    <span>Designer</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-secondary">
                    <input type="checkbox" checked />
                    <span>Coder</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox checkbox-success">
                    <input type="checkbox" checked />
                    <span>QA</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
                <b-col md="6">
                  <h6 class="mb-2">Company</h6>
                  <label class="radio radio-outline-primary">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>Less than 1 Year</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-success">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>1-5 years</span>
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio radio-outline-warning">
                    <input type="radio" name="radio" formcontrolname="radio" />
                    <span>5+ years</span>
                    <span class="checkmark"></span>
                  </label>
                </b-col>
              </b-row>
            </tab-content>


              <tab-content title="Annexes" icon="i-Check">
                <Appendix></Appendix>
            </tab-content>




            </form-wizard>
          </b-card>
        </b-col>

        <!--b-col md="4 mb-30">
          <b-card>
            <h3>Aperçu</h3>
          </b-card>
        </b-col-->
      </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

  import Summary from '@/modules/enterprise_kits/business_plan/components/bp_content/summary/Summary'
  import CompanyOverview from '@/modules/enterprise_kits/business_plan/components/bp_content/company_overview/CompanyOverview'
  import ProductService from '@/modules/enterprise_kits/business_plan/components/bp_content/product_service/ProductService'
  import MarketResearch from '@/modules/enterprise_kits/business_plan/components/bp_content/market_research/MarketResearch'
  import Strategy from '@/modules/enterprise_kits/business_plan/components/bp_content/marketing_strategy/Strategy'
  import Team from '@/modules/enterprise_kits/business_plan/components/bp_content/team/Team'
  import Appendix from '@/modules/enterprise_kits/business_plan/components/bp_content/appendix/Appendix'




export default {
  name: 'BusinessPlan',
  components: {
    Summary,
    CompanyOverview,
    ProductService,
    MarketResearch,
    Strategy,
    Team,
    Appendix
  },
}

</script>

<style scoped>

</style>
