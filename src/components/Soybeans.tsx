import { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";

// import { estimate } from "../modules/Reducer";
import "./Table.css";

function Selection() {
  const [ia, setIa] = useState<Int>(58);
  const [il, setIl] = useState(61);
  const [ne, setNe] = useState(51);
  const [mn, setMn] = useState(48);
  const [sd, setSd] = useState(44);
  const [ind, setInd] = useState(61);
  const [nd, setNd] = useState(34);
  const [wi, setWi] = useState(49);
  const [oh, setOh] = useState(58);
  const [al, setAl] = useState(44);
  const [ak, setAk] = useState(53);
  const [de, setDe] = useState(48);
  const [ga, setGa] = useState(41);
  const [ks, setKs] = useState(26);
  const [ky, setKy] = useState(55);
  const [la, setLa] = useState(41);
  const [md, setMd] = useState(47);
  const [mi, setMi] = useState(47);
  const [ms, setMs] = useState(57);
  const [mo, setMo] = useState(45);
  const [ny, setNy] = useState(52);
  const [nc, setNc] = useState(39);
  const [ok, setOk] = useState(20);
  const [pa, setPa] = useState(47);
  const [sc, setSc] = useState(36);
  const [tn, setTn] = useState(54);
  const [tx, setTx] = useState(30);
  const [va, setVa] = useState(39);

  // const [guess, setGuess] = useState(0);
  // const dispatch = useDispatch();

  // const handleNumber = (e: { target: { value: any } }) => {};
  function onSubmit() {
    const x = (
      (al * 345000 +
        ak * 2950000 +
        de * 148000 +
        ga * 155000 +
        il * 10300000 +
        ind * 5480000 +
        ia * 9870000 +
        ks * 4400000 +
        ky * 1790000 +
        la * 1000000 +
        md * 460000 +
        mi * 2010000 +
        mn * 7280000 +
        ms * 2150000 +
        mo * 5550000 +
        ne * 5200000 +
        ny * 345000 +
        nc * 1640000 +
        nd * 6150000 +
        oh * 4730000 +
        ok * 420000 +
        pa * 560000 +
        sc * 380000 +
        sd * 5050000 +
        tn * 1570000 +
        tx * 110000 +
        va * 570000 +
        wi * 2070000) /
      82791000
    ).toFixed(1);

    alert(x);
  }

  return (
    <>
      <div style={{ border: "2px solid black", backgroundColor: "powderblue" }}>
        <h2 className="dark">Soybeans</h2>
        <div className="boxy" style={{ overflow: "scroll", maxHeight: "30em" }}>
          <Form>
            <table className="table table-striped table-hover table-responsive">
              <thead style={{ fontWeight: "bold" }}>
                <tr className="hdrs">
                  <td>State</td>
                  <td>USDA</td>
                  <td>3YrAvg</td>
                  <td>Planted Acres</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Illinois
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      type="number"
                      className="inputs"
                      value={il}
                      onChange={(e) => setIl(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <td>61</td>
                  <td>0</td>
                  <td>10.300</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Iowa
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      className="inputs"
                      value={ia}
                      onChange={(e) => setIa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>58</td>
                  <td>0</td>
                  <td>9.870</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{
                        fontWeight: "bold",
                        backgroundColor: "transparent",
                      }}
                    >
                      Minnesota
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={mn}
                      onChange={(e) => setMn(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>48</td>
                  <td>0</td>
                  <td>7.280</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      North Dakota
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={nd}
                      onChange={(e) => setNd(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>34</td>
                  <td>0</td>
                  <td>6.150</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Missouri
                    </Form.Label>
                    <Form.Control
                      value={mo}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setMo(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>45</td>
                  <td>0</td>
                  <td>5.550</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Indiana
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={ind}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setInd(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>61</td>
                  <td>0</td>
                  <td>5.480</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Nebraska
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={ne}
                      onChange={(e) => setNe(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>51</td>
                  <td>0</td>
                  <td>5.200</td>
                </tr>

                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      South Dakota
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={sd}
                      onChange={(e) => setSd(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>44</td>
                  <td>0</td>
                  <td>5.050</td>
                </tr>

                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Kansas
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={ks}
                      onChange={(e) => setKs(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>26</td>
                  <td>0</td>
                  <td>4.400</td>
                </tr>

                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Ohio
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={oh}
                      onChange={(e) => setOh(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>58</td>
                  <td>0</td>
                  <td>4.730</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Wisconsin
                    </Form.Label>
                    <Form.Control
                      style={{ minWidth: "5em" }}
                      value={wi}
                      onChange={(e) => setWi(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>
                  <td>49</td>
                  <td>0</td>
                  <td>2.070</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Alabama
                    </Form.Label>
                    <Form.Control
                      value={al}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setAl(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>44</td>
                  <td>0</td>
                  <td>0.345</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Arkansas
                    </Form.Label>
                    <Form.Control
                      value={ind}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setAk(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>53</td>
                  <td></td>
                  <td>2.950</td>
                </tr>

                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Delaware
                    </Form.Label>
                    <Form.Control
                      value={de}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setDe(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>48</td>
                  <td>0</td>
                  <td>0.148</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Georgia
                    </Form.Label>
                    <Form.Control
                      value={ga}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setGa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>41</td>
                  <td>0</td>
                  <td>0.155</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Kentucky
                    </Form.Label>
                    <Form.Control
                      value={ky}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setKy(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>55</td>
                  <td>0</td>
                  <td>1.790</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Louisiana
                    </Form.Label>
                    <Form.Control
                      value={la}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setLa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>41</td>
                  <td>0</td>
                  <td>1.000</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Maryland
                    </Form.Label>
                    <Form.Control
                      value={md}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setMd(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>47</td>
                  <td>0</td>
                  <td>0.460</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Michigan
                    </Form.Label>
                    <Form.Control
                      value={mi}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setMi(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>47</td>
                  <td>0</td>
                  <td>2.010</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Mississippi
                    </Form.Label>
                    <Form.Control
                      value={ms}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setMs(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>57</td>
                  <td>0</td>
                  <td>2.150</td>
                </tr>

                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      New York
                    </Form.Label>
                    <Form.Control
                      value={ny}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setNy(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>52</td>
                  <td>0</td>
                  <td>0.345</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      North Carolina
                    </Form.Label>
                    <Form.Control
                      value={nc}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setNc(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>39</td>
                  <td>0</td>
                  <td>1.640</td>
                </tr>

                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Oklahoma
                    </Form.Label>
                    <Form.Control
                      value={ok}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setOk(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>20</td>
                  <td>0</td>
                  <td>0.420</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Pennsylvania
                    </Form.Label>
                    <Form.Control
                      value={pa}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setPa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>47</td>
                  <td>0</td>
                  <td>0.560</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      South Carolina
                    </Form.Label>
                    <Form.Control
                      value={sc}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setSc(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>36</td>
                  <td>0</td>
                  <td>0.380</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Tennessee
                    </Form.Label>
                    <Form.Control
                      value={tn}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setTn(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>54</td>
                  <td>0</td>
                  <td>1.570</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Texas
                    </Form.Label>
                    <Form.Control
                      value={tx}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setTx(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>30</td>
                  <td>0</td>
                  <td>0.110</td>
                </tr>
                <tr>
                  <Form.Group className="input-group">
                    <Form.Label
                      className="label"
                      style={{ fontWeight: "bold" }}
                    >
                      Virginia
                    </Form.Label>
                    <Form.Control
                      value={va}
                      style={{ minWidth: "5em" }}
                      onChange={(e) => setVa(e.target.value)}
                      type="number"
                    ></Form.Control>
                  </Form.Group>{" "}
                  <td>39</td>
                  <td>0</td>
                  <td>0.570</td>
                </tr>
              </tbody>
            </table>
          </Form>
        </div>
        {/* <Button onSubmit={handleNumber}>Reset</Button> */}

        <Button
          className="btn btn-success"
          type={"submit"}
          onClick={onSubmit}
          style={{ float: "right" }}
        >
          Calculate
        </Button>
      </div>
    </>
  );
}

export default Selection;
