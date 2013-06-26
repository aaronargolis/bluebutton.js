describe('CCDA', function() {
  var record, expectedOutput, bb;

  function toJSON(target) {
    return JSON.parse(target.json())
  }
  
  beforeEach(function() {
    record = readFixtures('../../../components/blue-button-reference-ccda/blue_button_reference_ccda.xml');
    bb = BlueButton(record);
    expectedOutput = getJSONFixture('ccda_expected_output.json');
  });

  describe('document', function() {
    it('should match the ccda type', function() {
      var actual = bb.document().type;
      var expected = expectedOutput.document.type;

      expect(actual).toEqual(expected);
    });
  });

  describe('allergies', function() {
    it('should output the correct json', function() {
      var actual = toJSON(bb.allergies());
      var expected = expectedOutput.allergies;

      expect(actual).toEqual(expected);
    });
  });

  describe('demographics', function() {
    it('should output the correct json', function() {
      var actual = toJSON(bb.demographics());
      var expected = expectedOutput.demographics;

      expect(actual).toEqual(expected);
    });
  });

  describe('encounters', function() {
    it('should output the correct json', function() {
      var actual = toJSON(bb.encounters());
      var expected = expectedOutput.encounters;

      expect(actual).toEqual(expected);
    });
  });

  describe('immunizations', function() {
    it('should output the correct json', function() {
      var actual = toJSON(bb.immunizations());
      var expected = expectedOutput.immunizations;

      expect(actual).toEqual(expected);
    });
  });

  describe('labs', function() {
    it('should output the correct json', function() {
      var actual = toJSON(bb.labs());
      var expected = expectedOutput.labs;

      expect(actual).toEqual(expected);
    });
  });

  describe('medications', function() {
    it('should output the correct json', function() {
      var actual = toJSON(bb.medications());
      var expected = expectedOutput.medications;

      expect(actual).toEqual(expected);
    });
  });

  describe('problems', function() {
    it('should output the correct json', function() {
      var actual = toJSON(bb.problems());
      var expected = expectedOutput.problems;

      expect(actual).toEqual(expected);
    });
  });

  describe('procedures', function() {
    it('should output the correct json', function() {
      var actual = toJSON(bb.procedures());
      var expected = expectedOutput.procedures;

      expect(actual).toEqual(expected);
    });
  });

  describe('vitals', function() {
    it('should output the correct json', function() {
      var actual = toJSON(bb.vitals());
      var expected = expectedOutput.vitals;

      expect(actual).toEqual(expected);
    });
  });

  describe('data', function() {
    it('should output the correct json', function() {
      var actual = toJSON(bb.data);
      var expected = expectedOutput;

      expect(actual).toEqual(expected);
    });
  });

});