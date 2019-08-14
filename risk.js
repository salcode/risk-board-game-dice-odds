(function() {

	var attackerLoses2 = 'attacker loses 2',
		bothLose1 = 'attacker loses 1, defender loses 1',
		defenderLoses2 = 'defender loses 2';

	var result = rollAll();
	displayResult( result );

	function displayResult( result ) {
		var total = result[attackerLoses2] + result[bothLose1] + result[defenderLoses2];
		displaySingleResult( attackerLoses2, result[attackerLoses2], total );
		displaySingleResult( bothLose1, result[bothLose1], total );
		displaySingleResult( defenderLoses2, result[defenderLoses2], total );
	}

	function displaySingleResult( label, singleResult, total ) {
		console.log( label + ': ' + ( 100 * singleResult / total ).toFixed(2) + '%' );
	}

	function rollAll() {
		var a1, a2, a3, d1, d2,
			singleResult,
			result = {};
		result[attackerLoses2] = 0;
		result[bothLose1] = 0;
		result[defenderLoses2] = 0;

		for ( a1 = 1; a1 <= 6; a1++ ) {
			for ( a2 = 1; a2 <= 6; a2++ ) {
				for ( a3 = 1; a3 <= 6; a3++ ) {
					for ( d1 = 1; d1 <= 6; d1++ ) {
						for ( d2 = 1; d2 <= 6; d2++ ) {
							result[ evaluate( [ a1, a2, a3 ], [ d1, d2 ] ) ]++;
						}
					}
				}
			}
		}
		return result;
	}

	function evaluate( attacks, defends ) {
		// sort highest to lowest
		attacks = attacks.sort().reverse();
		defends = defends.sort().reverse();

		if (attacks[0] < defends[0]) {
				if (attacks[1] < defends[1]) {
					return 'attacker loses 2';
				} else {
					return 'attacker loses 1, defender loses 1';
				}
		} else {
				if (attacks[1] < defends[1]) {
					return 'attacker loses 1, defender loses 1';
				} else {
					return 'defender loses 2';
				}
		}
	}
})();
