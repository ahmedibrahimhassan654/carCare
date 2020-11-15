const express = require('express')

const {
   getMyBranches,
   createBranch,
   getBranches,
   getBranche,
   updateBranch,
   deleteBranch,
   AdminCreateBranch,
   ActiveBranch,
   addManger,
   deleteManger

} = require('../controllers/branches')

const productRouter = require('./products')

// const Branch = require('../models/Branch.js')

const advancedResults = require('../middelware/advancedResult.js')
const {
	authCheck,
	adminCheck,
	mangerCheck,
	employeeCheck,
	ownerCheck,
} = require('../middelware/auth')

const router = express.Router()

// //Owner Checks

// router.get('/branches/owner', authCheck, ownerCheck, getMyBranches)

router.post('/branches/owner', authCheck, ownerCheck, createBranch)

router.put('/branches/owner/:slug', authCheck, ownerCheck, updateBranch)

router.delete('/branches/owner/:slug', authCheck, ownerCheck, deleteBranch)
router.put('/branches/owner/:slug/manger', authCheck, ownerCheck, addManger)
router.delete('/branches/owner/:slug/manger/:id', authCheck, ownerCheck, deleteManger)

//Admin Checks
router.post('/branche/admin', authCheck, adminCheck, AdminCreateBranch)
router.put('/branches/admin/:slug', authCheck, adminCheck, updateBranch)
router.delete('/branches/admin/:slug', authCheck, adminCheck, deleteBranch)
router.put('/branches/admin/:slug', authCheck, adminCheck, ActiveBranch)
router.put('/branches/admin/:slug/manger', authCheck, adminCheck, addManger)

// //mangers check

// router.get('/branches/manger', authCheck, mangerCheck, getMyBranches)

// //employess check


router.get('/branches', getBranches)
router.get('/branches/:id', getBranche)


 router.get('/mybranch', authCheck, getMyBranches)

// //Re-route into other resource routers

// router.use('/:branchId/products', productRouter)



module.exports = router
