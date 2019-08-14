(function() {

	var attackerWins2 = 'attacker wins 2',
		bothWin1 = 'attacker wins 1, defender wins 1',
		defenderWins2 = 'defender wins 2';

	var result = rollAll();
	displayResult( result );

	function displayResult( result ) {
		var total = result[attackerWins2] + result[bothWin1] + result[defenderWins2];
		displaySingleResult( attackerWins2, result[attackerWins2], total );
		displaySingleResult( bothWin1, result[bothWin1], total );
		displaySingleResult( defenderWins2, result[defenderWins2], total );
	}

	function displaySingleResult( label, singleResult, total ) {
		console.log( label + ': ' + ( 100 * singleResult / total ).toFixed(2) + '%' );
	}

	function rollAll() {
		var a1, a2, a3, d1, d2,
			singleResult,
			result = {};
		result[attackerWins2] = 0;
		result[bothWin1] = 0;
		result[defenderWins2] = 0;

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

		if (attacks[0] > defends[0]) {
				if (attacks[1] > defends[1]) {
					return 'attacker wins 2';
				} else {
					return 'attacker wins 1, defender wins 1';
				}
		} else {
				if (attacks[1] > defends[1]) {
					return 'attacker wins 1, defender wins 1';
				} else {
					return 'defender wins 2';
				}
		}
	}
})();
