import React from "react";
import Head from "next/head";
import Wrapper from "../components/layouts/wrapper";

const Table = () => (
  <Wrapper>
    <Head>
      <title>Table Page</title>
    </Head>
    <table dir="ltr" border="1" cellspacing="0" cellpadding="2">
      <colgroup>
        <col width="100" /> <col width="100" /> <col width="100" />
        <col width="100" /> <col width="100" /> <col width="100" />
        <col width="100" /> <col width="100" /> <col width="100" />
      </colgroup>
      <tbody>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"Friendly Farms Mass Balance"}'
          >
            <div>
              <h1>Friendly Farms Mass Balance</h1>
            </div>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The weights and THC concentrations of the biomass in for extraction, the oil produced from that extraction, and the spent biomass after extraction."}'
          >
            <div>
              <div>
                The weights and THC concentrations of the biomass in for
                extraction, the oil produced from that extraction, and the spent
                biomass after extraction.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"Most of our toll-processing contracts are based on an expected yield of 12% by weight."}'
          >
            <div>
              <div>
                Most of our toll-processing contracts are based on an expected
                yield of 12% by weight.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"We are confident based on the material provided that our processes meet and exceed expectations for industrial toll processing for biomass extractions."}'
          >
            <div>
              <div>
                We are confident based on the material provided that our
                processes meet and exceed expectations for industrial toll
                processing for biomass extractions.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="9" data-sheets-value='{"1":2,"2":"Gorilla Glue"}'>
            <strong>Gorilla Glue</strong>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The total THC available from the biomass was 4338.46g and we recovered 3543g in the extracted oil. There was 366.2g leftover in the spent material."}'
          >
            <div>
              <div>
                The total THC available from the biomass was 4338.46g and we
                recovered 3543g in the extracted oil. There was 366.2g leftover
                in the spent material.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The extraction efficiency was 81.66 and the recovery was 90.10%"}'
          >
            <div>
              <div>
                The extraction efficiency was 81.66 and the recovery was 90.10%
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":2,"2":"Potency"}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
          <td data-sheets-value='{"1":2,"2":"Potency "}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
          <td data-sheets-value='{"1":2,"2":"Potency "}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":3,"3":24.42}'>24.42</td>
          <td
            data-sheets-value='{"1":3,"3":17766}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
          >
            17,766
          </td>
          <td
            data-sheets-value='{"1":3,"3":4338.457200000001}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            4338.4572
          </td>
          <td data-sheets-value='{"1":3,"3":84.3}'>84.3</td>
          <td
            data-sheets-value='{"1":3,"3":4202.8}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
          >
            4,203
          </td>
          <td
            data-sheets-value='{"1":3,"3":3542.9604}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            3542.9604
          </td>
          <td
            data-sheets-value='{"1":3,"3":2.7}'
            data-sheets-numberformat='[null,2,"0.0",1]'
          >
            2.7
          </td>
          <td
            data-sheets-value='{"1":3,"3":13563.2}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
            data-sheets-formula="=R[0]C[-6]-R[0]C[-3]"
          >
            13,563
          </td>
          <td
            data-sheets-value='{"1":3,"3":366.2064000000001}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            366.2064
          </td>
        </tr>

        <tr>
          <td colspan="3"></td>
          <td
            colspan="3"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"Extraction Yield by Weight"}'
          >
            Extraction Yield by Weight
          </td>
          <td colspan="3" data-sheets-value='{"1":2,"2":"THC Mass In "}'>
            THC Mass In
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"4203/17766"}'>4203/17766</td>
          <td
            data-sheets-value='{"1":3,"3":0.23656422379826636}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=(R[-5]C[0]/R[-5]C[-3])*100%"
          >
            23.66%
          </td>
          <td></td>
          <td
            data-sheets-value='{"1":3,"3":4338.457200000001}'
            data-sheets-formula="=R[-5]C[-4]"
          >
            4338.4572
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td
            colspan="3"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"THC Extraction Efficiency"}'
          >
            THC Extraction Efficiency
          </td>
          <td colspan="3" data-sheets-value='{"1":2,"2":"Total THC Mass Out"}'>
            <div>
              <div>Total THC Mass Out</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"3542.96/4338.46"}'>
            3542.96/4338.46
          </td>
          <td
            data-sheets-value='{"1":3,"3":0.8166406251512633}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=R[-7]C[1]/R[-7]C[-2]"
          >
            81.66%
          </td>
          <td></td>
          <td data-sheets-value='{"1":2,"2":"3542.96+366.21"}'>
            3542.96+366.21
          </td>
          <td
            data-sheets-value='{"1":3,"3":3909.1668}'
            data-sheets-numberformat='[null,2,"#,##0.00",1]'
            data-sheets-formula="=R[-7]C[-2]+R[-7]C[1]"
          >
            3,909.17
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="3"></td>
          <td
            colspan="2"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"THC Recovery Efficiency"}'
          >
            THC Recovery Efficiency
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"3909.17/4338.46"}'>
            3909.17/4338.46
          </td>
          <td
            data-sheets-value='{"1":3,"3":0.901049986156369}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=R[-2]C[0]/R[-4]C[-1]"
          >
            90.10%
          </td>
          <td></td>
        </tr>

        <tr>
          <td colspan="9" data-sheets-value='{"1":2,"2":"Purple Punch"}'>
            <strong>Purple Punch</strong>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The total THC available from the biomass was 1663.2g and we recovered 937.49g in the extracted oil. There was 129.3g leftover in the spent material."}'
          >
            <div>
              <div>
                The total THC available from the biomass was 1663.2g and we
                recovered 937.49g in the extracted oil. There was 129.3g
                leftover in the spent material.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The extraction efficiency was 56.37% and the recovery was 64.14%"}'
          >
            <div>
              <div>
                The extraction efficiency was 56.37% and the recovery was 64.14%
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":2,"2":"Biomass IN"}'>Biomass IN</td>
          <td></td>
          <td></td>
          <td data-sheets-value='{"1":2,"2":"Oil"}'>Oil</td>
          <td></td>
          <td></td>
          <td data-sheets-value='{"1":2,"2":"Spent OUT"}'>Spent OUT</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":2,"2":"Potency"}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
          <td data-sheets-value='{"1":2,"2":"Potency "}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
          <td data-sheets-value='{"1":2,"2":"Potency "}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":3,"3":14.4}'>14.4</td>
          <td
            data-sheets-value='{"1":3,"3":11550}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
          >
            11,550
          </td>
          <td
            data-sheets-value='{"1":3,"3":1663.2000000000003}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            1663.2
          </td>
          <td data-sheets-value='{"1":3,"3":68.57}'>68.57</td>
          <td
            data-sheets-value='{"1":3,"3":1367.2}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
          >
            1,367
          </td>
          <td
            data-sheets-value='{"1":3,"3":937.48904}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            937.48904
          </td>
          <td
            data-sheets-value='{"1":3,"3":1.27}'
            data-sheets-numberformat='[null,2,"0.0",1]'
          >
            1.3
          </td>
          <td
            data-sheets-value='{"1":3,"3":10182.8}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
            data-sheets-formula="=R[0]C[-6]-R[0]C[-3]"
          >
            10,183
          </td>
          <td
            data-sheets-value='{"1":3,"3":129.32155999999998}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            129.32156
          </td>
        </tr>

        <tr>
          <td colspan="3"></td>
          <td
            colspan="3"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"Extraction Yield by Weight"}'
          >
            Extraction Yield by Weight
          </td>
          <td colspan="3" data-sheets-value='{"1":2,"2":"THC Mass In "}'>
            THC Mass In
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"1367/11550"}'>1367/11550</td>
          <td
            data-sheets-value='{"1":3,"3":0.11837229437229438}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=(R[-5]C[0]/R[-5]C[-3])*100%"
          >
            11.84%
          </td>
          <td></td>
          <td
            data-sheets-value='{"1":3,"3":1663.2000000000003}'
            data-sheets-formula="=R[-5]C[-4]"
          >
            1663.2
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td
            colspan="3"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"THC Extraction Efficiency"}'
          >
            THC Extraction Efficiency
          </td>
          <td colspan="3" data-sheets-value='{"1":2,"2":"Total THC Mass Out"}'>
            <div>
              <div>Total THC Mass Out</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"937.5/1663.2"}'>937.5/1663.2</td>
          <td
            data-sheets-value='{"1":3,"3":0.5636658489658489}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=R[-7]C[1]/R[-7]C[-2]"
          >
            56.37%
          </td>
          <td></td>
          <td data-sheets-value='{"1":2,"2":"937.5+127.3"}'>937.5+127.3</td>
          <td
            data-sheets-value='{"1":3,"3":1066.8106}'
            data-sheets-numberformat='[null,2,"#,##0.00",1]'
            data-sheets-formula="=R[-7]C[-2]+R[-7]C[1]"
          >
            1,066.81
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="3"></td>
          <td
            colspan="2"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"THC Recovery Efficiency"}'
          >
            THC Recovery Efficiency
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"1066.81/1663.2"}'>
            1066.81/1663.2
          </td>
          <td
            data-sheets-value='{"1":3,"3":0.6414205146705145}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=R[-2]C[0]/R[-4]C[-1]"
          >
            64.14%
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" data-sheets-value='{"1":2,"2":"Blue Dream"}'>
            <strong>Blue Dream</strong>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The total THC available from the biomass was 4364g and we recovered 2985.55g in the extracted oil. There was 206.1g leftover in the spent material."}'
          >
            <div>
              <div>
                The total THC available from the biomass was 4364g and we
                recovered 2985.55g in the extracted oil. There was 206.1g
                leftover in the spent material.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The extraction efficiency was 68.41% and the recovery was 73.13%."}'
          >
            <div>
              <div>
                The extraction efficiency was 68.41% and the recovery was
                73.13%.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":2,"2":"Potency"}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
          <td data-sheets-value='{"1":2,"2":"Potency "}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
          <td data-sheets-value='{"1":2,"2":"Potency "}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":3,"3":20.5}'>20.5</td>
          <td
            data-sheets-value='{"1":3,"3":21288}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
          >
            21,288
          </td>
          <td
            data-sheets-value='{"1":3,"3":4364.04}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            4364.04
          </td>
          <td data-sheets-value='{"1":3,"3":88.65}'>88.65</td>
          <td
            data-sheets-value='{"1":3,"3":3367.8}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
          >
            3,368
          </td>
          <td
            data-sheets-value='{"1":3,"3":2985.5547000000006}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            2985.5547
          </td>
          <td
            data-sheets-value='{"1":3,"3":1.15}'
            data-sheets-numberformat='[null,2,"0.0",1]'
          >
            1.2
          </td>
          <td
            data-sheets-value='{"1":3,"3":17920.2}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
            data-sheets-formula="=R[0]C[-6]-R[0]C[-3]"
          >
            17,920
          </td>
          <td
            data-sheets-value='{"1":3,"3":206.0823}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            206.0823
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td
            colspan="3"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"Extraction Yield by Weight"}'
          >
            Extraction Yield by Weight
          </td>
          <td colspan="3" data-sheets-value='{"1":2,"2":"THC Mass In "}'>
            THC Mass In
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"3368/21288 *100%"}'>
            3368/21288 *100%
          </td>
          <td
            data-sheets-value='{"1":3,"3":0.15820180383314544}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=(R[-5]C[0]/R[-5]C[-3])*100%"
          >
            15.82%
          </td>
          <td></td>
          <td
            data-sheets-value='{"1":3,"3":4364.04}'
            data-sheets-formula="=R[-5]C[-4]"
          >
            4364.04
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td
            colspan="3"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"THC Extraction Efficiency"}'
          >
            THC Extraction Efficiency
          </td>
          <td colspan="3" data-sheets-value='{"1":2,"2":"Total THC Mass Out"}'>
            <div>
              <div>Total THC Mass Out</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"2985.55/4364"}'>2985.55/4364</td>
          <td
            data-sheets-value='{"1":3,"3":0.6841263370638218}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=R[-7]C[1]/R[-7]C[-2]"
          >
            68.41%
          </td>
          <td></td>
          <td data-sheets-value='{"1":2,"2":"2985.55 + 206"}'>2985.55 + 206</td>
          <td
            data-sheets-value='{"1":3,"3":3191.6370000000006}'
            data-sheets-numberformat='[null,2,"#,##0.00",1]'
            data-sheets-formula="=R[-7]C[-2]+R[-7]C[1]"
          >
            3,191.64
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="3"></td>
          <td
            colspan="2"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"THC Recovery Efficiency"}'
          >
            THC Recovery Efficiency
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"3,191.64/4364"}'>3,191.64/4364</td>
          <td
            data-sheets-value='{"1":3,"3":0.7313491627024502}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=R[-2]C[0]/R[-4]C[-1]"
          >
            73.13%
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9" data-sheets-value='{"1":2,"2":"Nepali Pink"}'>
            <strong>Nepali Pink</strong>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The total THC available from the biomass was 4379.7g and we recovered 3189g in the extracted oil. There was 261.93g leftover in the spent material."}'
          >
            <div>
              <div>
                The total THC available from the biomass was 4379.7g and we
                recovered 3189g in the extracted oil. There was 261.93g leftover
                in the spent material.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The extraction efficiency was 72.81 and the recovery was 78.79"}'
          >
            <div>
              <div>
                The extraction efficiency was 72.81 and the recovery was 78.79
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":2,"2":"Potency"}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
          <td data-sheets-value='{"1":2,"2":"Potency "}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
          <td data-sheets-value='{"1":2,"2":"Potency "}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":3,"3":18.11}'>18.11</td>
          <td
            data-sheets-value='{"1":3,"3":24184}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
          >
            24,184
          </td>
          <td
            data-sheets-value='{"1":3,"3":4379.7224}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            4379.7224
          </td>
          <td data-sheets-value='{"1":3,"3":82.2}'>82.2</td>
          <td
            data-sheets-value='{"1":3,"3":3879.6}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
          >
            3,880
          </td>
          <td
            data-sheets-value='{"1":3,"3":3189.0312000000004}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            3189.0312
          </td>
          <td
            data-sheets-value='{"1":3,"3":1.29}'
            data-sheets-numberformat='[null,2,"0.0",1]'
          >
            1.3
          </td>
          <td
            data-sheets-value='{"1":3,"3":20304.4}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
            data-sheets-formula="=R[0]C[-6]-R[0]C[-3]"
          >
            20,304
          </td>
          <td
            data-sheets-value='{"1":3,"3":261.92676}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            261.92676
          </td>
        </tr>

        <tr>
          <td colspan="3"></td>
          <td
            colspan="3"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"Extraction Yield by Weight"}'
          >
            Extraction Yield by Weight
          </td>
          <td colspan="3" data-sheets-value='{"1":2,"2":"THC Mass In "}'>
            THC Mass In
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"3880/24184"}'>3880/24184</td>
          <td
            data-sheets-value='{"1":3,"3":0.16042011247105523}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=(R[-5]C[0]/R[-5]C[-3])*100%"
          >
            16.04%
          </td>
          <td></td>
          <td
            data-sheets-value='{"1":3,"3":4379.7224}'
            data-sheets-formula="=R[-5]C[-4]"
          >
            4379.7224
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td
            colspan="3"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"THC Extraction Efficiency"}'
          >
            THC Extraction Efficiency
          </td>
          <td colspan="3" data-sheets-value='{"1":2,"2":"Total THC Mass Out"}'>
            <div>
              <div>Total THC Mass Out</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"3189/4379.7"}'>3189/4379.7</td>
          <td
            data-sheets-value='{"1":3,"3":0.7281354635627136}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=R[-7]C[1]/R[-7]C[-2]"
          >
            72.81%
          </td>
          <td></td>
          <td data-sheets-value='{"1":2,"2":"3189.03+261.93"}'>
            3189.03+261.93
          </td>
          <td
            data-sheets-value='{"1":3,"3":3450.95796}'
            data-sheets-numberformat='[null,2,"#,##0.00",1]'
            data-sheets-formula="=R[-7]C[-2]+R[-7]C[1]"
          >
            3,450.96
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="3"></td>
          <td
            colspan="2"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"THC Recovery Efficiency"}'
          >
            THC Recovery Efficiency
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"3450.96/4379.2"}'>
            3450.96/4379.2
          </td>
          <td
            data-sheets-value='{"1":3,"3":0.7879398840437924}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=R[-2]C[0]/R[-4]C[-1]"
          >
            78.79%
          </td>
          <td></td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"Pineapple Upside Down"}'
          >
            <strong>Pineapple Upside Down</strong>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The total THC available from the biomass was 1504.97g and we recovered 1060.74g in the extracted oil. There was 102.72g leftover in the spent material."}'
          >
            <div>
              <div>
                The total THC available from the biomass was 1504.97g and we
                recovered 1060.74g in the extracted oil. There was 102.72g
                leftover in the spent material.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            colspan="9"
            data-sheets-value='{"1":2,"2":"The extraction efficiency was 70.48% and the recovery was 77.31%."}'
          >
            <div>
              <div>
                The extraction efficiency was 70.48% and the recovery was
                77.31%.
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":2,"2":"Potency"}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
          <td data-sheets-value='{"1":2,"2":"Potency "}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
          <td data-sheets-value='{"1":2,"2":"Potency "}'>Potency</td>
          <td data-sheets-value='{"1":2,"2":"Amount"}'>Amount</td>
          <td data-sheets-value='{"1":2,"2":"THC Available"}'>THC Available</td>
        </tr>
        <tr>
          <td data-sheets-value='{"1":3,"3":16.5}'>16.5</td>
          <td
            data-sheets-value='{"1":3,"3":9121}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
          >
            9,121
          </td>
          <td
            data-sheets-value='{"1":3,"3":1504.9650000000001}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            1504.965
          </td>
          <td data-sheets-value='{"1":3,"3":82.87}'>82.87</td>
          <td
            data-sheets-value='{"1":3,"3":1280}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
          >
            1,280
          </td>
          <td
            data-sheets-value='{"1":3,"3":1060.7359999999999}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            1060.736
          </td>
          <td
            data-sheets-value='{"1":3,"3":1.31}'
            data-sheets-numberformat='[null,2,"0.0",1]'
          >
            1.3
          </td>
          <td
            data-sheets-value='{"1":3,"3":7841}'
            data-sheets-numberformat='[null,2,"#,##0",1]'
            data-sheets-formula="=R[0]C[-6]-R[0]C[-3]"
          >
            7,841
          </td>
          <td
            data-sheets-value='{"1":3,"3":102.7171}'
            data-sheets-formula="=(R[0]C[-2]/100)*R[0]C[-1]"
          >
            102.7171
          </td>
        </tr>

        <tr>
          <td colspan="3"></td>
          <td
            colspan="3"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"Extraction Yield by Weight"}'
          >
            Extraction Yield by Weight
          </td>
          <td colspan="3" data-sheets-value='{"1":2,"2":"THC Mass In "}'>
            THC Mass In
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"1280/9121 *100%"}'>
            1280/9121 *100%
          </td>
          <td
            data-sheets-value='{"1":3,"3":0.14033548952965683}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=(R[-5]C[0]/R[-5]C[-3])*100%"
          >
            14.03%
          </td>
          <td></td>
          <td
            data-sheets-value='{"1":3,"3":1504.9650000000001}'
            data-sheets-formula="=R[-5]C[-4]"
          >
            1504.965
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td
            colspan="3"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"THC Extraction Efficiency"}'
          >
            THC Extraction Efficiency
          </td>
          <td colspan="3" data-sheets-value='{"1":2,"2":"Total THC Mass Out"}'>
            <div>
              <div>Total THC Mass Out</div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"1060.736/1504.965"}'>
            1060.736/1504.965
          </td>
          <td
            data-sheets-value='{"1":3,"3":0.7048243646862218}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=R[-7]C[1]/R[-7]C[-2]"
          >
            70.48%
          </td>
          <td></td>
          <td data-sheets-value='{"1":2,"2":"1060.736 + 102.72"}'>
            1060.736 + 102.72
          </td>
          <td
            data-sheets-value='{"1":3,"3":1163.4531}'
            data-sheets-numberformat='[null,2,"#,##0.00",1]'
            data-sheets-formula="=R[-7]C[-2]+R[-7]C[1]"
          >
            1,163.45
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="3"></td>
          <td
            colspan="2"
            rowspan="1"
            data-sheets-value='{"1":2,"2":"THC Recovery Efficiency"}'
          >
            THC Recovery Efficiency
          </td>
          <td></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="3"></td>
          <td data-sheets-value='{"1":2,"2":"1163.45/1504.97"}'>
            1163.45/1504.97
          </td>
          <td
            data-sheets-value='{"1":3,"3":0.7730765167296249}'
            data-sheets-numberformat='[null,3,"0.00%",1]'
            data-sheets-formula="=R[-2]C[0]/R[-4]C[-1]"
          >
            77.31%
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </Wrapper>
);

export default Table;
